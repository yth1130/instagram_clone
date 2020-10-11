import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../config/colors'

export default class PhoneInputForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contryWrapper}>
                    <Text style={styles.country}>IN +91</Text>
                </View>
                <View style={styles.inputNumber}>
                    <TextInput value={'8006502009'} />
                </View>
                <View style={styles.closeBtnWrapper}>
                    <AntDesign size={25} style={styles.icon} color={colors.gray} name="close"></AntDesign>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        borderWidth:1,
        padding:10,
        // backgroundColor:"black",
        borderRadius:5,
        borderColor:colors.gray,
        backgroundColor:colors.gray1,

    },
    contryWrapper:{
        // flex:1,
        borderRightWidth: 1,
        borderRightColor:colors.gray,
        // marginLeft:15,
        // marginRight:15,
        paddingRight:15,
        // backgroundColor:"black",
    },
    country: {
        fontWeight:'700',
        color:colors.gray,

    },
    inputNumber:{
        flex:1,
        paddingLeft:15,
        // backgroundColor:"black",
    },
    closeBtnWrapper:{
        flex:1,
        // backgroundColor:"black",
    },
    icon: {
        textAlign:"right",

    },
})