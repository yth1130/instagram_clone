import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { globalStyles } from './GlobalStyles'
import { colors } from './config/colors'
import Feed from './components/Feed'
import {AntDesign} from '@expo/vector-icons'

export default class FeedScreen extends Component {
    render() {
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.header}>
                    <AntDesign style={styles.icon} name={'camera'} size={40}/>
                    <Text style={styles.logo}>Instagram</Text>
                    <View style={styles.headerRightWrapper}>
                        <AntDesign style={styles.icon} name={'iconfontdesktop'} size={40}/>
                        <AntDesign style={styles.icon} name={'message1'} size={40}/>
                    </View>
                </View>
                <ScrollView style={styles.feedContainer}>
                    <Feed />
                </ScrollView>
                <View style={styles.footer}>
                    <AntDesign style={styles.icon} name={'home'} size={40}/>
                    <AntDesign style={styles.icon} name={'search1'} size={40}/>
                    <AntDesign style={styles.icon} name={'plussquareo'} size={40}/>
                    <AntDesign style={styles.icon} name={'heart'} size={40}/>
                    <AntDesign style={styles.icon} name={'user'} size={40}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        flex:1,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomColor:colors.gray,
        borderBottomWidth:1,
    },
    headerRightWrapper: {
        flexDirection:'row',
    },
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        // position: 'absolute',
        bottom: 50,
        borderTopColor:colors.gray,
        borderTopWidth:1,
    },
    feedContainer: {
        flex:1,
    },
    icon: {
        width:40,
        height:40,
    },
    logo: {
        fontSize:30,
        // fontStyle: 'italic',
        // fontFamily: 'Billabong', //package.json에 rnpm에 폴더 표기, react-native link 실행.
    },
})