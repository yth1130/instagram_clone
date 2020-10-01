import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/favicon.png')}></Image>
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.from}>from</Text>
                    <View style={styles.logoTextWrapper}></View>
                    {/* <Image style={styles.logo} source={require('../assets/favicon.png')}></Image> */}
                    <Text style={styles.logo}>TAEHUN</Text>
                </View>
            </View>
        )
    }
}

export const styles=StyleSheet.create({
    container:{
        // display:'flex',
        flex: 1
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        // display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 100,
    },
    icon: {
        width:100,
        height:100,
    },
    logoTextWrapper: {
        width:'33%',
        height:20,
    },
    from: {
        color: 'grey',
        marginBottom: 15,
    },
    logo: {
        // flex: 1,
        // width: undefined
        // height:20,
        fontSize: 20,
    },
})