import { StyleSheet, Platform, StatusBar } from 'react-native';

export const globalStyles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // topSearchBar: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   height: 50,
    //   paddingHorizontal: 20,
    //   borderTopWidth: 1,
    //   borderColor: '#000',
    // },
    droidSafeArea: {
        flex: 1,
        // backgroundColor: npLBlue,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
