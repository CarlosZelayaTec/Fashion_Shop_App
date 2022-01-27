import React from 'react';
import { StyleSheet, Text, ImageBackground, Button, TextInput, View } from 'react-native';
import Login from '../Components/Login';

const PrincipalScreen = ({navigation}) => {
    return(
        <View style={styles.container} >
            <ImageBackground source={require('../assets/FondoPrincipal.jpg')} resizeMode='cover' style={styles.imageBackground} >
            <Login navigation={navigation}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        alignSelf: 'stretch',
        // justifyContent: 'center',
    },
})

export default PrincipalScreen;