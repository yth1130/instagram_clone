import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { colors } from '../config/colors'

interface PrimaryInputFormProps {
    placeHolderText: string,
}

export default class PrimaryInputForm extends Component<PrimaryInputFormProps> {
    static defaultProps={
        placeHolderText:'',
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder={this.props.placeHolderText}/>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        // display: ''
    },
    inputContainer: {
        backgroundColor: colors.gray1,
        borderWidth:0.5,
        borderColor:colors.gray,
        borderRadius:5,
    },
})