import React, { useState, useContext } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

function CadastroServico() {

    const {state, dispatch} = useContext(UserContext);
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const navigation = useNavigation();

    async function handleSubmit() {

        try{
            const response = await api.post('/servico', {
                nome,
                valor,
                barbeiroCd: state.cdBarbeiro
            })
    
            alert("Cadastrado com sucesso!");
            setNome('');
            setValor('');
        }catch(error){
            const { data } = error.response;
            alert(data.error);
        }

    }


    function btnEditar() {
        navigation.navigate('Lista de serviços');
    }



    return (
        <KeyboardAvoidingView style={styles.background}>
            {/* <Text style={styles.title}>Cadastrado de serviço</Text> */}
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

                <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Cadastrar Serviço</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btnEditar} onPress={btnEditar}>
                    <Text style={styles.submitText}>Editar um Serviço</Text>
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
        textAlign: "center",
        fontSize: 21,
        backgroundColor: "#FFF",
        marginBottom: 12,
    },

    btnEditar: {
        backgroundColor: '#333',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 50,
    },


});

export default CadastroServico;