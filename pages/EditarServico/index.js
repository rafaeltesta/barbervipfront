import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

function EditarServico({navigate, route}) {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');


    useEffect(() => {
        async function getParticipante() {
            const response = await api.get('/servico.details/' + route.params.cdServico);

            setNome(response.data.nome);
            setValor(response.data.valor);
        }
        getParticipante();

        
        console.log(nome)
        console.log(valor)
    }, [])


    function handleSubmit() {

        //TODO: chama api edicao

        console.log(nome)
        console.log(valor)
        console.log(tempo)

        alert("Editado com sucesso!");

        navigation.navigate('MainTab');
    }



    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.title}>Editar serviço</Text>
            <View style={styles.container}>

                <Text style={styles.textLabel}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    autoCorrect={false}
                    value={nome}
                    onChangeText={e => setNome(e)}
                />
                <Text style={styles.textLabel}>Valor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    autoCorrect={false}
                    value={valor}
                    onChangeText={e => setValor(e)}
                    keyboardType="decimal-pad"
                />
                {/* <Text style={styles.textLabel}>Tempo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tempo"
                    autoCorrect={false}
                    value={tempo}
                    onChangeText={e => setTempo(e)}
                    keyboardType="numeric"
                /> */}

                <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Editar Serviço</Text>
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

    textLabel: {
        fontSize: 9,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 120,
        textAlign: "center",
        fontSize: 21,
        backgroundColor: "#FFF",
        marginBottom: 12,
    },


});

export default EditarServico;