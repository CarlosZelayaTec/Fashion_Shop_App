import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categorias from '../Components/Categorias'

const AreaScreen = () => {
    return(
        <View style={styles.container} >
            <Categorias />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202641',
        // backgroundColor: '#fff',
    },

})

export default AreaScreen;