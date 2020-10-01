import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../config/colors'

export default class SearchBox extends Component {
    constructor(props:any) {
        super(props);
        this.state={
            searchText:'',
        }
    }

    onChangeText(text: string) {
        this.setState({
            searchText:text,
        });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.iconWrapper}>
                        <AntDesign name='search1' style={styles.icon} size={22} color={colors.gray} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder={'Search'} onChangeText={(text) => { this.onChangeText(text); }} style={styles.inputBox} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding: 10,
        // alignItems:'flex-end'
        // justifyContent:'center'
    },
    iconWrapper:{
        display: 'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'black',
    },
    icon: {
        // padding:5,
    },
    inputWrapper:{
        display: 'flex',
        flex:9,
        // backgroundColor:'black',
        // align
    },
    inputBox: {
        height:40,
    }
})
