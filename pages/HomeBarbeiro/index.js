import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';


function HomeBarbeiro() {
    const navigation = useNavigation();

    async function confirmSair() {
        const token = await AsyncStorage.getItem('token');
        const response = await api.get("/destroytoken", { token: token });
        if (response.status === 200) {
            AsyncStorage.clear();
            navigation.reset({
                routes: [{ name: 'Login' }]
            });
        } else {
            console.log('erro')
        }

    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.containerButtonAgendamento} onPress={() => navigation.navigate('Cadastro Serviço')}>
                    <View style={styles.icon}>
                        <Ionicons name={'add-circle-outline'} size={28} />
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 17 }}>Novo serviço</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButtonReserva} onPress={() => navigation.navigate('Agendamentos')}>
                    <View style={styles.icon}>
                        <Ionicons name={'reader-outline'} size={28} />
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 17 }}>Agendamentos</Text>
                    </View>
                </TouchableOpacity>



            </View>
            <View style={styles.containerLogout}>
                <TouchableOpacity style={styles.containerButtonLogout} onPress={confirmSair}>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 17 }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default HomeBarbeiro;


const styles = StyleSheet.create({
    container: {
        padding: 20,
        position: 'relative',
        direction: 'inherit',
        marginTop: '50%',
    },

    containerLogout: {
        padding: 20,
        position: 'relative',
        direction: 'inherit',
        marginTop: '50%',
    },

    containerButtonAgendamento: {
        marginBottom: 30,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "tomato",
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#eee",
    },
    containerButtonReserva: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#4682B4",
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#eee",

    },
    containerButtonLogout: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#eee",

    },
    icon: {
        alignItems: 'center',

    },
    text: {
        alignItems: 'center',
    },


});