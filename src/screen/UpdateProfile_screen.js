import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header_Customer from '../components/Header_Customer'
import { useUserLogin } from '../context/index.context'
import { COLORS, SIZES } from '../constants/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import UserIcon from '../assets/svg/user.svg'

export default function UpdateProfile_screen({ navigation }) {

  const { userLogin, setUserLogin, setUserAuth } = useUserLogin();


  const [image, setImage] = useState('');

  const pickImage = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(imagePick => {
      // console.log(image);

      setImage(imagePick.sourceURL)


    }).catch(error => {
      console.log("lỗi pick image: " + e);

    }).finally(() => {
      console.log(image);
    })
  }


  const dataLogin = {
    name: "Nguyễn Văn Dũng",
    mail: "dũngsenpai1702@gmail.com",
    uid: "1306",
    img: ""
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 55, alignItems: 'center' }}>
      <Header_Customer title={'Update Profile'} navigation={navigation} />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={[{ width: 80, height: 80, borderRadius: 50, }, { backgroundColor: COLORS.DeepSkyBlue }]}>
          <TouchableOpacity
            style={{ width: '100%', height: '100%' }}
            onPress={pickImage}
          >
            {
              image == '' || image == null ? (
                <UserIcon width={80} height={80} fill={'white'} />
              ) : (
                <Image style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 50 }} source={{ uri: image }} />
              )
            }
          </TouchableOpacity>

        </View>
        <Text style={{ color: COLORS.DeepSkyBlue, fontWeight: 'bold', fontSize: SIZES.h4, marginTop: 10 }}>{userLogin.name}</Text>
        <Text>{userLogin.mail}</Text>
      </View>

      

    </View>
  )
}

const styles = StyleSheet.create({})