import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Image style={styles.profileThumb} source={require('../../assets/favicon.png')} />
                    <Text>name</Text>
                    <Image source={require('../../assets/favicon.png')} />
                </View>
                <View>
                    <Text>Image</Text>
                </View>
                <View>
                    <Text>Footer</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    },
    headerWrapper: {
        flexDirection:'row',
    },
    profileThumb: {
        width:50,
        height:50,
        borderRadius:50,
    },
})
