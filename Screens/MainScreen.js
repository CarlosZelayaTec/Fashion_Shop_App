import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import ListaProductos from '../Components/ListaProductos';
import ImagesProducts from '../Api/ImagesProducts';

const MainScreen = ({ navigation }) => {

    const idCategoria = navigation.getParam('idCategoria');

    const [productos, setProductos] = useState([])
    const [imagenes, setImagenes] = useState([]);

    const fetchProductos = () => {
        const data = require('../Api/Productos.json');
        setImagenes(ImagesProducts);
        setProductos(data);
    }

    
    useEffect(() => {
        fetchProductos();
    })

    return(
        <View style={styles.container} >
            <FlatList 
                data={productos.filter(x => x.categoriaId === idCategoria)}
                keyExtractor={x => x.id}
                numColumns={2}
                renderItem={({item}) => <ListaProductos idP={item.id} ttt={item.nameProduc} precio={item.precio} imagenes={imagenes}/>}
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
        backgroundColor: '#202641',
        // backgroundColor: '#FFFFFF',
    }
})

export default MainScreen;