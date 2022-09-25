// import { Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function CadastroServico({ navigation }, params) {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Tempo"
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Cadastrar Serviço</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },


    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 60,
    },

    input: {
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#222',
    },

    btnSubmit: {
        backgroundColor: '#35aaff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 50,
    },

    submitText: {
        color: '#fff',
        fontSize: 18
    },


});

export default CadastroServico;