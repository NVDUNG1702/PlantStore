import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'

export default function ItemSearch_Components({ title, price, quantity, item, navigation }) {
    const toPriceVN = (number) => {
        return number.toLocaleString('vi-VN');
    }
    return (
        <TouchableOpacity style={{ width: '100%', height: 100, flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
                navigation.navigate('detailProduct', { product: item })
            }}
        >
            <View style={{ width: 77, height: 77, backgroundColor: '#E5E5E5', borderRadius: 8, marginEnd: 10 }}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={item.image[0]} />
            </View>
            <View style={{ height: 77 }}>
                <Text style={{ color: COLORS.black, fontSize: SIZES.h5, fontWeight: '500' }}>{title}</Text>
                <Text style={{ color: COLORS.black, fontSize: SIZES.h5, fontWeight: '500' }}>{price}đ</Text>
                <Text style={{ color: COLORS.black }}>Còn {quantity} sp</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})