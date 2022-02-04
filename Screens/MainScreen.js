import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, Platform, TouchableOpacity, Modal } from 'react-native';
import ImagesProducts from '../Api/ImagesProducts';

const getItem = (data, index) => ({
    id: index,
    key: data[index].id,
    name: data[index].nameProduc.toUpperCase(),
    precio: data[index].precio,
    color: data[index].color,
    talla: data[index].talla,
    sexo: data[index].sexo
})

// const ModalPerfil = () => {

//     const [visibleModal, setVisibleModal] = useState(true);

//     const modalVisibility = () => {
//         setVisibleModal(true)
//     }

//     return(
//         <View style={styles.modal}>
//             <Modal
//                 animationType='slide'
//                 visible={visibleModal}
//                 transparent={true}
//             >
//                 <Text>Soy el Modal</Text>
//             </Modal>
//         </View>
//     )
// }

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
                            <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('ModalPerfil', { idProducto: item.id, imageUrl: urls[item.id].url, item: item }) }>
                                <View style={styles.align}>
                                    <Image source={urls[item.id].url} style={styles.imagen} resizeMode='cover'></Image>
                                    <View style={styles.containerText}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text style={styles.precio}>L. {item.precio}.00</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        borderRadius: 10,
        backgroundColor: '#121937',
        borderRadius: 10,
    },
    align: {
        flexDirection: 'row',
    },
    containerText: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        fontWeight: 'bold',
        textAlign: 'right'
    },
    precio: {
        fontSize: 18,
        color: '#CCCCCC',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        paddingBottom: 10,
        color: '#0CADC7'
    },
    imagen: {
        width: 170,
        height: 165,
        borderRadius: 10,
        margin: 5
    },
})

export default MainScreen;