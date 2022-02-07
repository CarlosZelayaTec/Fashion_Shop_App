import React from 'react';
import { Text, StyleSheet, View, TextInput, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = ({navigation}) => {

    return (
      <View style={styles.container}>

        <View style={styles.containerText}>
            <Text style={styles.title}>Bienvenidos a Fashion Shop</Text>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.textWelcome}>¡Hola!, Cuentanos ¿Cómo te llamas? </Text>
                </View>
        </View>

        <View style={styles.containterInput}>
            <TextInput style={styles.textInput} placeholder='Su nombre' placeholderTextColor={'#858585'} autoCorrect={true}/>
        </View>

        <View style={styles.buttonAlign}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Categoria') }}> 
                <Text style={styles.textButton}>Aceptar y continuar</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#000000',
        fontSize: 40,
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        color: '#FFFFFF'
    },
    textWelcome: {
        color: '#FFFFFF',
        fontSize: 30,
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        }),
        marginTop: 40
    },
    welcomeContainer: {
        width: '80%'
    },
    containerText: {
        marginTop: 20,
        marginHorizontal: 10
    },
    textInput: {
        width: '60%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        height: 25,
        color: '#FFFFFF'
    },
    containterInput: {
        marginLeft: 15,
        marginTop: 20,
    },
    buttonAlign: {
        flex: 1,
        marginTop: 80,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    button: {
        backgroundColor: '#111B6D',
        width: 220,
        alignItems: 'center',
        height: 38,
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 80
    },
    textButton: {
        fontSize: 20,
        color: '#FFFFFF',
        ...Platform.select({
            ios: {
                fontFamily: 'Cochin',
            }
        })
    }
});

export default Login;
