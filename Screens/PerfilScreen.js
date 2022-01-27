import React from 'react';
import { StyleSheet, Text, ImageBackground, Button, TextInput, View } from 'react-native';

const PerfilScreen = () => {
    return(
        <View style={styles.container} >
            <Text>Estamos en la pagina de Perfil </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

export default PerfilScreen;