import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

 const PerfilModal = ({navigation}) => {

    const idProductos = navigation.getParam('idProducto');
    const imageUrls = navigation.getParam('imageUrl');
    const items = navigation.getParam('item');
    // console.log(imageUrls);

  return (
    <View style={styles.container}>
        <View style={styles.modalSize} >
            

                <View style={styles.imageContainer}>
                    <ImageBackground source={imageUrls} resizeMode='cover' style={styles.image}> 
                        <TouchableOpacity style={styles.botonClose} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/cerrar.png')} resizeMode='cover' style={{width: 40, height: 40}} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            <ScrollView>
                <View style={styles.datosContainer}>
                    <Text>{items.name}</Text>
                    <Text>L. {items.precio}.00</Text>
                    <Text>Colores Disponibles: {items.color}</Text>
                    <Text>Tallas Disponibles: {items.talla}</Text>
                    <Text>Sexo: {items.sexo}</Text>
                </View>
            </ScrollView>
        </View>
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
        height: "92%",
        width: '100%', 
        backgroundColor:"#CCCCCC", 
        justifyContent:"flex-start",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        // paddingTop: 10
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        // backgroundColor: 'blue',
        maxHeight: '80%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: 'flex-end'
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },
    datosContainer: {
        // flex: 1,
        // height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    botonClose: {
        // flex: 1,
        // maxHeight: 50,
        // width: 50,
        backgroundColor: '#FFF',
        borderRadius: 50,
        marginTop: 5
        // justifyContent: 'flex-end'
    }
});

export default PerfilModal;