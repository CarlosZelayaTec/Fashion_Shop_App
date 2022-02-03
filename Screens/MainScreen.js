import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image } from 'react-native';
import ListaProductos from '../Components/ListaProductos';
import ImagesProducts from '../Api/ImagesProducts';

const MainScreen = ({ navigation }) => {

    return(
        <View>
            <Text>Estamos en la rama de optimizado</Text>
            <Text>Aqui utilizaremos VirutalizedList</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202641',
    }
})

export default MainScreen;