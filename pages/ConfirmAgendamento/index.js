import React, { useState, useEffect, useReducer, useContext } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { set } from 'date-fns';
import { UserContext } from '../../contexts/UserContext';
import { UserReducer } from '../../reducers/UserReducer';

function Confirm({ navigate, route}) {

    const navigation = useNavigation();

    const {state, dispatch} = useContext(UserContext);

    console.log(route.params.horario)
    console.log(route.params.servicoCd)
    console.log(route.params.barbeiroCd)
    console.log(state.cdUser)

    async function handleSubmit() {

        try {
            const response = await api.post('/appointments', {
                horario: route.params.horario,
                servicoCd: route.params.servicoCd,
                barbeiroCd: route.params.barbeiroCd,
                userCd: state.cdUser
            })

            alert("Lancado com sucesso!");
            navigation.navigate('MainTab');
        } catch (error) {
            const { data } = error.response;
            alert(data.error);
        }


    }






    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.title}>Confirmar agendamento</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnDelete} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Concluir</Text>
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

    btnDelete: {
        backgroundColor: 'red',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
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

export default Confirm;