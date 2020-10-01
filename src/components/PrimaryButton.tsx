import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config/colors";

interface PrimaryButtonProps {
    label: string,
    bgColor: string,
    textColor: string,
}

export class PrimaryButton extends Component<PrimaryButtonProps> {
    constructor(props:PrimaryButtonProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bgColor }]}>
                    <Text style={[styles.text, { color: this.props.textColor }]}> {this.props.label} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        width: '100%',
        padding:15,
        // backgroundColor
    },
    button: {
        // backgroundColor: colors.primary,
        // textAlign: 'center',
        padding:15,
        borderRadius:5,
    },
    text: {
        textAlign:'center',
        // color: colors.secondary,
        fontSize:16,
    },
});