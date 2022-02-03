import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React, {useEffect, useState} from 'react';

 const ListaProductos = ({ idP ,ttt, imagenes, precio }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Image source={imagenes[idP - 1].url} style={styles.image} resizeMode='cover' defaultSource={require('../assets/default.jpg')} />
        <Text style={styles.modelo}>{ttt}</Text>
        <Text style={styles.precio}>L. {precio}.00</Text>
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
      maxWidth: '100%',
      height: 195,
      borderRadius: 5
    },
    touchable: {
      // backgroundColor: '#EEEEEE',
      // padding: 8,
      marginTop: 5,
      borderRadius: 10,
      // shadowColor: '#ccc',
      //   shadowOffset: {width: 0, height: 4},
      //   shadowOpacity: 0.5,
      //   elevation: 2,
      maxWidth: '100%',
      alignItems: 'flex-start',
      padding: 5
      // marginLeft: 5
    },
    modelo: {
      fontSize: 20,
      ...Platform.select({
        ios: {
          fontFamily: 'Cochin'
        }
      }),
      marginTop: 5,
      textAlign: 'left',
      color: '#FFFFFF'
    }, 
    precio: {
      fontSize: 15,
      ...Platform.select({
        ios: {
          fontFamily: 'Cochin'
        }
      }),
      marginTop: 5,
      textAlign: 'right',
      fontWeight: 'bold',
      color: '#cccccc'
    }
});

export default ListaProductos;
