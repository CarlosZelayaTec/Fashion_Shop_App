import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListaCategorias = ({ Categorias }) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.containerTouchable}> 
            <Text style={styles.titleCategorias}>{Categorias}</Text>
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
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#FFFFFF',
        height: 60,
        borderRadius: 15,
        padding: 5
    },
    titleCategorias: {
        fontFamily: 'Cochin',
        fontSize: 19,
        // backgroundColor: 'red'
        // textAlign: 
    }
});     

export default ListaCategorias;
