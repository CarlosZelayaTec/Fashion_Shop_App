import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ListaCategorias from './ListaCategorias';

const Categorias = () => {

    const [datos, setDatos] = useState([]);

    const fetchDatos = () => {
        const data = require('../Api/CategoriaProductos.json');
        setDatos(data);
    }

    useEffect(() => {
        fetchDatos();
    })

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona una categoría: </Text>
        <FlatList 
            data={datos}
            keyExtractor={x => x.id}
            numColumns={3}
            renderItem={({item}) =>  <ListaCategorias Categorias={item.nameCategory} />  }
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Cochin',
    }
})

export default Categorias;
