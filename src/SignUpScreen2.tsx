import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from './GlobalStyles'
import PrimaryInputForm from './components/PrimaryInputForm'
import { PrimaryButton } from './components/PrimaryButton'
import { colors } from './config/colors'

export default class SignUpScreen2 extends Component {
    render() {
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.topContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}> ENTER CONFIRMATION CODE </Text>
                    </View>
                    <View style={styles.subHeadingContainer}>
                        <Text>
                            <Text style={styles.infoText}> Enter 6 digit code we sent to +91 8086502009 </Text>
                            <Text style={styles.requestText}> Request a new one. </Text>
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <PrimaryInputForm placeHolderText={'Confirmation Code'}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton label={'Next'}/>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>
                        <Text style={styles.alreadyAccount}>Already have an account? </Text>
                        <Text style={styles.logIn}>Log in.</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignSelf: 'stretch',
    },
    headingContainer: {
        marginTop:'20%',
        marginBottom: 20,
    },
    subHeadingContainer: {
        marginLeft:'20%',
        marginRight:'20%',
        marginBottom:15,
    },
    inputContainer: {
        marginLeft: '10%',
        marginRight: '10%',
    },
    buttonContainer: {
        marginLeft: '5%',
        marginRight: '5%',
    },
    heading: {
        textAlign:'center',
        fontWeight:'700',
    },
    infoText: {
        color:colors.gray,
    },
    requestText: {
        color:colors.primary,
        fontWeight:'700',
    },
    topContainer: {
        flex:1,
    },
    bottomContainer: {
        borderTopWidth:1,
        borderColor:colors.gray,
        padding:15,
    },
    bottomText:{
        textAlign:'center',
    },
    alreadyAccount:{
        color:colors.gray,
    },
    logIn: {
        fontWeight:'700'
    },
})