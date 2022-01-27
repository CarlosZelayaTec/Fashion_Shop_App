import React from 'react';
import { StyleSheet, Text, ImageBackground, Button, TextInput, View } from 'react-native';

const MainScreen = ({ navigation }) => {

    const idCategoria = navigation.getParam('idCategoria');
    console.log(idCategoria);

    return(
        <View style={styles.container} >
            <Text>Estamos en la pagina de Main</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
    }
})

export default MainScreen;