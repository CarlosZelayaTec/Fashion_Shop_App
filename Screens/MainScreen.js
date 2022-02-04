import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, Platform } from 'react-native';
import ImagesProducts from '../Api/ImagesProducts';

const getItem = (data, index) => ({
    id: index,
    key: data[index].id,
    name: data[index].nameProduc.toUpperCase(),
    precio: data[index].precio,
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

    const urls = imagenes.filter(x => x.id_Categoria === idCategoria)

    return(
        <View style={styles.container}>
            <VirtualizedList 
                data={data.filter(x => x.categoriaId === idCategoria)}
                keyExtractor={(item) => item.key }
                renderItem={({item}) => {
                    return(
                        <>
                            <View style={styles.list}>
                                <View style={styles.align}>
                                    <Image source={urls[item.id].url} style={styles.imagen} resizeMode='cover'></Image>
                                    <View style={styles.containerText}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.precio}>L. {item.precio}.00</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    )
                }}
                getItemCount={x => x.filter(x => x.categoriaId === idCategoria).length}
                getItem={getItem}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202641',
        alignContent: 'flex-start'
    },
    list: {
        flexBasis: 100,
        flexWrap: 'wrap',
        margin: 10,
        height: 175,
        // borderWidth: 1,
        // borderColor: '#000',
        borderRadius: 10,
        backgroundColor: '#1D2443'
    },
    align: {
        flexDirection: 'row',
    },
    containerText: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // backgroundColor: 'red',
        paddingRight: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        marginTop: 15
    },
    precio: {
        fontSize: 18,
        color: '#CCCCCC',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        })
    },
    imagen: {
        width: 170,
        height: 165,
        borderRadius: 10,
        margin: 5
        // borderBottomRightRadius: 10,
        // borderTopRightRadius: 10
    }
})

export default MainScreen;