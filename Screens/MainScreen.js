import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image } from 'react-native';
import ImagesProducts from '../Api/ImagesProducts';

const getItem = (data, index) => ({
    id: index,
    name: data[index].nameProduc,
    precio: data[index].precio,
    image: ImagesProducts[index].url,
})

const MainScreen = ({ navigation }) => {

    const idCategoria = navigation.getParam('idCategoria');
    const [data, setData] = useState([])
    const [imagenes, setImagenes] = useState([])

    const fetchProductos = () => {
        const dataProducts = require('../Api/Productos.json');
        setImagenes(ImagesProducts);
        setData(dataProducts);
    }

    useEffect(() => {
        fetchProductos();
    })

    // data.filter(x => x.categoriaId === idCategoria);
    imagenes.filter(x => x.id_Categoria === idCategoria);

    // console.log(data);

    return(
        <View style={styles.container}>
            <VirtualizedList 
                data={data.filter(x => x.categoriaId === idCategoria)}
                keyExtractor={(item, x) => x.id }
                renderItem={({item}) => {
                    return(
                        <View style={styles.list}>
                            <View style={styles.align}>
                                <Image source={item.image} style={styles.imagen} resizeMode='cover'></Image>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.title}>L. {item.precio}.00</Text>
                            </View>
                        </View>
                    )
                }}
                getItemCount={x => x.filter(x => x.categoriaId === idCategoria).length}
                getItem={getItem}
                // horizontal={true}
                windowSize={20}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202641',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        // alignItems: 'center'
    },
    list: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'baseline',
        // alignSelf: 'stretch'
        // backgroundColor: '#FFFFFF',
        // alignItems: 'baseline',
        // alignSelf: 'stretch',
    },
    align: {
        // flex: 1,
        // flexDirection: 'column-reverse',
        // backgroundColor: 'red',
        margin: 10,
        width: '40%'
        // maxWidth: '100%'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30
    },
    imagen: {
        width: 100,
        height: 100,
    }
})

export default MainScreen;