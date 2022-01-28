import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

 const ListaProductos = ({ ttt, imagenes }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Tennis/sebass.png')} style={{width: 150, height: 200}} />
      <Text>{ttt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 10
        // backgroundColor: 'blue',
    }
});

export default ListaProductos;
