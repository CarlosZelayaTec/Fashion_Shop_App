import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image } from 'react-native';
import ImagesProducts from '../Api/ImagesProducts';

const MainScreen = ({ navigation }) => {

    const idCategoria = navigation.getParam('idCategoria');
    const [data, setData] = useState([])

    const fetchProductos = () => {
        const dataProducts = require('../Api/Productos.json');
        setData(dataProducts);
    }

    useEffect(() => {
        fetchProductos();
    })

    console.log(data.filter(x => x.categoriaId === idCategoria));

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estamos en la rama de optimizado</Text>
            <Text style={styles.title}>Aqui utilizaremos VirutalizedList</Text>
            {/* <VirtualizedList 
                data={}
            /> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202641',
    },
    title: {
        color: '#FFFFFF'
    }
})

export default MainScreen;