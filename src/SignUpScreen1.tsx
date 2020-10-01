import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from './GlobalStyles'

export default class SignUpScreen1 extends Component {
    render() {
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.avatarWrapper}>
                    <Image style={styles.avatar} source={require('../assets/favicon.png')} />
                </View>
                <View style={styles.switchTitleWrapper}>
                    <TouchableOpacity style={styles.titleSwitch}><Text style={styles.title}>Phone</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.titleSwitch}><Text style={styles.title}>Email</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        // display:'flex',
        flex:1,
    },
    avatarWrapper:{
        // display:'flex',
        alignItems:'center',
        marginTop:'20%',
        // backgroundColor:'black',
    },
    avatar:{
        width:200,
        height:200,
    },
    switchTitleWrapper: {
        flexDirection:'row',
        marginTop:30,
    },
    titleSwitch: {
        flex:1,
    },
    title: {
        // flex:1,
        textAlign:'center',
        // backgroundColor:'black',
    },
})
