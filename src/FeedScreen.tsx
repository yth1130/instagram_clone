import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { globalStyles } from './GlobalStyles'
import { colors } from './config/colors'
import Feed from './components/Feed'

export default class FeedScreen extends Component {
    render() {
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.header}>
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 카메라아이콘 */ }/>
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 로고 */}/> 
                    <View style={styles.headerRightWrapper}>
                        <Image style={styles.icon} source={require('../assets/favicon.png') /* igtv? */}/> 
                        <Image style={styles.icon} source={require('../assets/favicon.png') /* 메세지 */}/> 
                    </View>
                </View>
                <ScrollView style={styles.feedContainer}>
                    <Feed />
                </ScrollView>
                <View style={styles.footer}>
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 홈 */ }/>
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 검색 */}/> 
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 플러스? */}/> 
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 하트? */}/> 
                    <Image style={styles.icon} source={require('../assets/favicon.png') /* 프로필 */}/> 
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
})