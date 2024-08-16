import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LogOutIcon from '../../assets/svg/logout.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { FIREBASE_AUTH } from '../../../auth/auth.config'
// import { signOut } from 'firebase/auth'
import HeaderHome_Components from '../../components/HeaderHome_Components'
import Header_Customer from '../../components/Header_Customer'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import UserIcon from '../../assets/svg/user.svg'
import { COLORS, SIZES, W } from '../../constants/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
// const auth = FIREBASE_AUTH;
import SweetAlert from 'react-native-sweet-alert'
import ImageCropPicker from 'react-native-image-crop-picker'
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { useUserLogin } from '../../context/index.context'
import { CommonActions } from '@react-navigation/native'
export default function Profile_screen({ navigation }) {

    const storage = {
        storeData: async (key, value) => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(error);
            }
        },

        getData: async (key) => {
            try {
                const value = await AsyncStorage.getItem(key);
                if (value) {
                    return JSON.parse(value);
                } else {
                    return null;
                }
            } catch (error) {
                console.error(error);
            }
        },

        removeData: async (key) => {
            try {
                await AsyncStorage.removeItem(key);
                console.log(`Data with key "${key}" has been removed.`);
            } catch (error) {
                console.error(`Failed to remove data with key "${key}": ${error}`);
            }
        }
    }
    const logOut = async () => {
        try {
            Alert.alert("Log Out", "Bạn có chắc muốn đăng xuất?", [
                {
                    text: 'cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        // signOut(auth)
                        storage.removeData("checkLogin")
                        storage.removeData("mail");
                        storage.removeData("pass")

                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,  // Đặt màn hình đầu tiên trong ngăn xếp là 'signin'
                                routes: [
                                    { name: 'signin' }  // Đặt tên của màn hình bạn muốn chuyển đến
                                ],
                            })
                        );
                    }
                }
            ])
            // SweetAlert
        } catch (error) {

        }
    }

    const { userLogin, setUserLogin, setUserAuth } = useUserLogin();

    const [image, setImage] = useState('');

    const pickImage = async () => {
        ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(async (imagePick) => {
            // console.log(image);
            try {
                const accounts = await storage.getData('account')

                const userFind = accounts.map((user, i) => {
                    if (user.uid == userLogin.uid) {
                        user.image = imagePick.sourceURL
                        return user
                    } else {
                        user
                    }

                })

                // userLogin.image = imagePick.sourceURL
                var userNew = userLogin
                userNew.image = imagePick.sourceURL
                setUserLogin(userNew)
            } catch (error) {

            }
            // setImage(imagePick.sourceURL)



        }).catch(error => {
            console.log("lỗi pick image: " + e);

        }).finally(() => {
            console.log(image);
        })
    }

    const [open, setOpen] = useState(false);




    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: 'center', paddingTop: 55 }}>

            <Header_Customer onPressRight={logOut} showAvatar={true} showLeft={true} navigation={navigation} title={'Profile'} icon={faRightFromBracket} />
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={[{ width: 80, height: 80, borderRadius: 50, }, st.shadow, { backgroundColor: COLORS.DeepSkyBlue }]}>
                    <TouchableOpacity
                        style={{ width: '100%', height: '100%' }}
                        onPress={pickImage}
                    >
                        {
                            userLogin.image == '' || userLogin.image == null ? (
                                <UserIcon width={80} height={80} fill={'white'} />
                            ) : (
                                <Image style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 50 }} source={{ uri: userLogin.image }} />
                            )
                        }
                    </TouchableOpacity>

                </View>
                <Text style={{ color: COLORS.DeepSkyBlue, fontWeight: 'bold', fontSize: SIZES.h4, marginTop: 10 }}>{userLogin.name}</Text>
                <Text>{userLogin.mail}</Text>
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginVertical: 50 }}>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                    onPress={() => { navigation.navigate('updateProfile') }}
                >
                    <Text style={[st.titleItem]}>Chỉnh sửa thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                // onPress={{}}
                >
                    <Text style={[st.titleItem]}>Cẩm nang trồng cây</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                    onPress={() => { navigation.navigate('orderHistory') }}
                >
                    <Text style={[st.titleItem]}>Lịch sử giao dịch</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[st.shadow, st.itemContainer]}
                // onPress={() => { navigation.navigate('updateProfile') }}
                >
                    <Text style={[st.titleItem]}> Q & A</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.DeepSkyBlue,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    },
    itemContainer: {
        width: W * 0.9,
        height: 70,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    titleItem: {
        fontSize: SIZES.h3,
        color: COLORS.DeepSkyBlue
    }
})