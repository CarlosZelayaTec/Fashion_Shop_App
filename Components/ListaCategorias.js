import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';

const ListaCategorias = ({ id, Categorias, navigation }) => {

    const next = () => {
        navigation.navigate('Main', { idCategoria: id });
    }
    
    const logos = [
        require('../assets/IconoCategoria/Tennis.png'),
        require('../assets/IconoCategoria/deslizar-el-pie-dentro-de-los-zapatos.png'),
        require('../assets/IconoCategoria/sandalias.png'),
        require('../assets/IconoCategoria/desodorante.png'),
        require('../assets/IconoCategoria/cremaCorporal.png'),
        require('../assets/IconoCategoria/perfume.png'),
        require('../assets/IconoCategoria/shampoo.png'),
        require('../assets/IconoCategoria/jabon.png'),
        require('../assets/IconoCategoria/cremaDePelo.png'),
        require('../assets/IconoCategoria/colorante.png'),
        require('../assets/IconoCategoria/bolso.png'),
        require('../assets/IconoCategoria/belleza.png'),
        require('../assets/IconoCategoria/esmalte-de-unas.png'),
        require('../assets/IconoCategoria/pendientes.png'),
        require('../assets/IconoCategoria/collar.png'),
        require('../assets/IconoCategoria/reloj-de-pulsera.png'),
        require('../assets/IconoCategoria/ropa.png'),
        require('../assets/IconoCategoria/cepillo-de-pelo.png'),
        require('../assets/IconoCategoria/ropa-interior.png'),
        require('../assets/IconoCategoria/ropa-interior-hombre.png'),
        require('../assets/IconoCategoria/bata-de-noche.png'),
    ]

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerTouchable} onPress={next} > 
            <Text style={styles.titleCategorias}>{Categorias}</Text>
            <Image source={logos[id - 1]} style={styles.imageLogo} resizeMode='cover' />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        elevation: 2,
        // shadowColor: "#000",
        // shadowOffset: {
        // 	width: 0,
        // 	height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    containerTouchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
        backgroundColor: '#FFFFFF',
        height: 80,
        borderRadius: 15,
        padding: 5
    },
    titleCategorias: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        })
    },
    imageLogo: {
        width: 60,
        height: 60,
    }
});     

export default ListaCategorias;
