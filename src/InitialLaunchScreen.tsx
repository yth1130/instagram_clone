import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from "react-native";
// import { Icon } from 'react-native-vector-icons/
import { AntDesign } from '@expo/vector-icons'
import { globalStyles } from "./GlobalStyles";
import { colors } from "./config/colors";
import { PrimaryButton } from "./components/PrimaryButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SearchBox from "./components/SearchBox";

const DATA=[
    {id:'1',
    title:'Language 1',
    subtitle:'Language 1'},
    {id:'2',
    title:'Language 2',
    subtitle:'Language 2'},
    {id:'3',
    title:'Language 3',
    subtitle:'Language 3'},
    {id:'4',
    title:'Language 4',
    subtitle:'Language 4'},
]

interface InitialLaunchScreenState {
    languageModalVisible: boolean;
}

export class InitialLaunchScreen extends Component<any, InitialLaunchScreenState> {

    constructor(props:any) {
        super(props);
        this.state = {
            languageModalVisible:false,
        }
    }

    onPressLanguage() {
        // console.log("onPressLanguage A");
        // console.log(this.state.languageModalVisible);
        this.setState({languageModalVisible:!this.state.languageModalVisible});
        // console.log("onPressLanguage B");
    }

    render() {
        const languageModalVisible = this.state.languageModalVisible;
        return (
            <View style={[styles.container, globalStyles.droidSafeArea]}>
                <View style={styles.languageWrapper}>
                    {/* <TouchableOpacity onPress={()=>{this.onPressLanguage();}}> */}
                    <TouchableOpacity onPress={this.onPressLanguage.bind(this)}>
                        <Text style={styles.language}>
                            <Text>English (United States)</Text>
                            <AntDesign name='caretdown' size={20} color={colors.gray}></AntDesign>
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapper}>
                    <Image style={styles.instaLogo} source={require('../assets/favicon.png')}></Image>
                    <PrimaryButton label='Create New Account' bgColor={colors.primary} textColor={colors.secondary} />
                    <PrimaryButton label='Login' bgColor={colors.secondary} textColor={colors.primary} />
                </View>
                <View style={styles.footerWrapper}>
                    <View style={styles.footerContentWrapper}>
                        <Text style={styles.from}>from</Text>
                        <Text style={styles.facebook}>FACEBOOK</Text>
                    </View>
                </View>
                <Modal visible={languageModalVisible} transparent={true}>
                    {/* <View style={[styles.modalContainer, (languageModalVisible==true)?{backgroundColor:'rgba(0,0,0,0.5)'}:null]}> */}
                    <View style={[styles.modalContainer, {backgroundColor:'rgba(0,0,0,0.5)'}]}>
                        <View style={styles.modalContentContainer}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
                            </View>
                            <View style={styles.underline} />
                            <View style={styles.searchBoxWrapper}>
                                <SearchBox/>
                            </View>
                            <View style={styles.underline} />
                            <FlatList
                                data={DATA}
                                keyExtractor={item=>item.id}
                                renderItem={({item})=>
                                    <View style={styles.languageItemWrapper}>
                                        <Text>{item.title}</Text>
                                        <Text style={styles.subLanguage}>{item.subtitle}</Text>
                                    </View>
                                } />
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>{this.onPressLanguage()}} ><Text>Close Modal</Text></TouchableOpacity>
                </Modal>
            </View>
        )
    }
}

export const styles=StyleSheet.create({
    container: {
        // display:'flex',
        flex: 1,
        alignSelf: 'stretch', //화면 꽉 채우기.
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'stretch',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        // alignContent: 'flex-end',
        // backgroundColor: '#555555',
    },
    languageWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#000000',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        // backgroundColor: '#000000',
    },
    instaLogo: {
        // width:'50%',
        // height:'25%',
        // width:'100%',
        // height:'100%',
        // width: 250,
        // height: 250,
    },
    footerWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    language: {
        color:colors.gray,
        
    },
    footerContentWrapper: {
        borderTopColor:colors.gray,
        borderTopWidth:0.5,
        width:'100%',
        alignItems: 'center',
        padding:10,
    },
    from: {
        color:colors.gray,
    },
    facebook: {
        fontWeight:'bold',
    },
    modalContainer: {
        display:'flex',
        flex:1,
    },
    modalContentContainer:{
        display:'flex',
        flex:1,
        backgroundColor:colors.secondary,
        marginLeft:'10%',
        marginRight:'10%',
    },
    titleWrapper:{
        padding:10,
    },
    title:{
        fontSize:20,
        fontWeight:'700',
    },
    underline:{
        height:0.5,
        backgroundColor:colors.gray1,
    },
    searchBoxWrapper:{

    },
    languageItemWrapper: {
        marginLeft:15,
        marginBottom:10,
    },
    subLanguage: {
        color:colors.gray,
        fontSize:16,
    }
})