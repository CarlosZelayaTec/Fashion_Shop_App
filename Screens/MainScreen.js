import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import ListaProductos from '../Components/ListaProductos';

const MainScreen = ({ navigation }) => {

    const idCategoria = navigation.getParam('idCategoria');

    const [productos, setProductos] = useState([])
    const [imagenes, setImagenes] = useState([])

    const fetchProductos = () => {
        const data = require('../Api/Productos.json');
        setProductos(data);
    }

    // const fetchImagenes = () => {
    //     productos.filter(x => {
            
    //     } )
    // }

    useEffect(() => {
        fetchProductos();
        fetchImagenes();
    })

    console.log(imagenes);

    return(
        <View style={styles.container} >
            <FlatList 
                data={productos.filter(x => x.categoriaId === idCategoria)}
                keyExtractor={x => x.id}
                numColumns={2}
                renderItem={({item}) => <ListaProductos ttt={item.nameProduc} imagenes={imagenes}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignSelf: 'stretch',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#CCCCCC',
    }
})

export default MainScreen;