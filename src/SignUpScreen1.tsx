import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from './GlobalStyles'
import { colors } from './config/colors'
import PhoneInputForm from './components/PhoneInputForm'
import { PrimaryButton } from './components/PrimaryButton'

interface SignUPScreen1State {
    isPhoneEnabled: boolean,

}

export default class SignUpScreen1 extends Component<any, SignUPScreen1State> {
    constructor(props: any) {
        super(props);
        this.state={
            isPhoneEnabled: true,
        }
    }
    switchButton(value:boolean) {
        this.setState({ isPhoneEnabled: value });
        // console.log(this.state.isPhoneEnabled);
    }
    render() {
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.topContainer}>
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={require('../assets/favicon.png')} />
                    </View>
                    <View style={styles.switchTitleWrapper}>
                        <TouchableOpacity onPress={() => this.switchButton(true)} style={[styles.titleSwitch, { borderBottomColor: this.state.isPhoneEnabled ? colors.black : colors.gray }]}>
                            <Text style={[styles.title, {color: this.state.isPhoneEnabled ? colors.black : colors.gray}]}>Phone</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={this.switchButton.bind(this, true)} style={styles.titleSwitch}><Text style={styles.title}>Phone</Text></TouchableOpacity> */}
                        <TouchableOpacity onPress={() => this.switchButton(false)} style={[styles.titleSwitch, { borderBottomColor: this.state.isPhoneEnabled ? colors.gray : colors.black }]}>
                            <Text style={[styles.title, {color: this.state.isPhoneEnabled ? colors.gray : colors.black}]}>Email</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.phoneNumberInputWrapper}>
                        <PhoneInputForm />
                    </View>
                    <View style={styles.notificationWrapper}>
                        <Text style={styles.notificationText}>You may receive SMS updates from instagram and can opt out at any time.</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton label={"Next"}/>
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
        margin:30,
        marginTop:30,
    },
    titleSwitch: {
        flex:1,
        // borderBottomColor: colors.black,
        borderBottomWidth: 2,
    },
    title: {
        // flex:1,
        textAlign: 'center',
        // backgroundColor:'black',
        padding: 15,
        fontWeight: '700',
    },
    phoneNumberInputWrapper: {
        margin:30,
    },
    notificationWrapper: {
        padding:30,
        paddingTop:10,
    },
    notificationText:{
        color:colors.gray,
        textAlign:'center',
    },
    buttonWrapper:{
        marginLeft:15,
        marginRight:15,
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
