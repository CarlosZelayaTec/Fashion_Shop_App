import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React, {useEffect, useState} from 'react';

let indice = 0;
let x

 const ListaProductos = ({ idP, ttt, imagenes }) => {

  const y = imagenes.length; 

   if(y !== x){
     indice = 0
    }

    if(indice < y ){
      indice++
    } else{
      indice = 1
    }
    x = y;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Image source={imagenes[indice - 1].url} style={styles.image} resizeMode='cover' defaultSource={require('../assets/default.jpg')} />
        <Text style={styles.modelo}>{ttt}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'blue',
    },
    image: {
      width: 160,
      height: 170,
      borderRadius: 10
    },
    touchable: {
      backgroundColor: '#EEEEEE',
      padding: 8,
      borderRadius: 10,
      shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        elevation: 2,
        alignItems: 'center',
        maxWidth: 170
    },
    modelo: {
      fontSize: 15,
      ...Platform.select({
        ios: {
          fontFamily: 'Cochin'
        }
      }),
      marginTop: 5,
      textAlign: 'right'
    }
});

export default ListaProductos;
