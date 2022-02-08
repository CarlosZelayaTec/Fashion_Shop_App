import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Platform, ScrollView } from 'react-native';
import ImageView from 'react-native-image-viewing'
import React, {useState, useEffect} from 'react';

 const PerfilModal = ({navigation}) => {

    const idProductos = navigation.getParam('idProducto');
    const imageUrls = navigation.getParam('imageUrl');
    const items = navigation.getParam('item');

    const [visible, setVisible] = useState(false)
    const [imagesV, setImagesV] = useState([imageUrls])

    if(items.sexo === ""){
        items.sexo = "N/A"
    }
    if(items.color.length === 0)
    {
        items.color = "N/A"
    }
    if(items.talla.length === 0)
    {
        items.talla = "N/A"
    }

  return (
    <View style={styles.container}>
        <View style={styles.modalSize} >

                <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => setVisible(true)}>
                    <ImageBackground source={imageUrls} resizeMode='contain' style={styles.image} > 
                        <TouchableOpacity style={styles.botonClose} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/cerrar.png')} resizeMode='cover' style={{width: 35, height: 35, paddingRight: 10, opacity: 0.6}} />
                        </TouchableOpacity>
                    </ImageBackground>
                </TouchableOpacity>
                </View>

            <ScrollView>
                <View style={styles.datosContainer}>
                        <View style={styles.alignDatos}>

                            <View style={styles.title}>
                                <Text style={styles.font}><Text style={styles.returns}>{items.name}</Text></Text>
                            </View>

                            <Text style={styles.font}><Text style={styles.returns}>L. {items.precio}.00</Text> </Text>
                        </View>
                            <Text style={styles.font}>Colores Disponibles: <Text style={styles.returns}>{items.color} </Text></Text>
                            <Text style={styles.font}>Tallas Disponibles: <Text style={styles.returns}>{`${items.talla}`}</Text></Text>
                            <Text style={styles.font}>Sexo: <Text style={styles.returns}>{items.sexo}</Text></Text>

                            <TouchableOpacity onPress={() => alert('Pronto estará disponible')} style={styles.butonStyle}>
                                <Text style={styles.button}>Agregar al carrito</Text>
                            </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
                    <ImageView 
                        images={imagesV}
                        visible={visible}
                        imageIndex={0}
                        animationType='slide'
                        onRequestClose={() => setVisible(false)}
                    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    modalSize: { 
        height: "93%",
        width: '100%', 
        backgroundColor:"#fff", 
        justifyContent:"flex-start",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
        
    },
    imageContainer: {
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        maxHeight: '65%',
        backgroundColor: '#EEEEEE',
        marginTop: 5
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
    },
    datosContainer: {
        minHeight: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginHorizontal: 15,
        paddingBottom: 5,
    },
    alignDatos: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
    },
    font: {
        fontSize: 20,
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        color: '#000',
    },  
    returns: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    title: {
        width: '70%'
    },
    botonClose: {
        backgroundColor: '#eee',
        borderRadius: 50,
        marginTop: 5,
        marginRight: 10,
        opacity: 0.5
    },
    button: {
        color: '#FFFFFF',
        fontSize: 30,
        padding: 10,
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
    },
    butonStyle: {
        backgroundColor: '#000',
        borderRadius: 12,
        alignSelf: 'stretch',
        alignItems: 'center'
    }
});

export default PerfilModal;