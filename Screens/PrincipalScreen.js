import React from 'react';
import { StyleSheet, ImageBackground, TextInput, View } from 'react-native';
import Login from '../Components/Login';

const PrincipalScreen = ({navigation}) => { 

    return(
        <View style={styles.container} >
            <ImageBackground source={require('../assets/FondoOpcional.jpg')} resizeMode='cover' style={styles.imageBackground} >
            <Login navigation={navigation}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
})

export default PrincipalScreen;