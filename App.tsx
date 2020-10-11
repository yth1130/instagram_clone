import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SplashScreen } from './src/SplashScreen';
import { InitialLaunchScreen } from './src/InitialLaunchScreen';
import SignUpScreen1 from './src/SignUpScreen1';
import SignUpScreen2 from './src/SignUpScreen2';
import FeedScreen from './src/FeedScreen';

export default function App() {
    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            {/* <InitialLaunchScreen /> */}
            {/* <SignUpScreen1 /> */}
            {/* <SignUpScreen2 /> */}
            <FeedScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignSelf: 'stretch',
        // width: '100%',
        backgroundColor: '#fff',
        // backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
