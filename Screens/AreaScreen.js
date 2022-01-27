import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categorias from '../Components/Categorias'

const AreaScreen = ({ navigation }) => {

    return(
        <View style={styles.container} >
            <Categorias navigation={navigation}/>
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