import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

function Home() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.containerButtonAgendamento} onPress={() => navigation.navigate('Agendar')}>
                    <View style={styles.icon}>
                        <Ionicons name={'add-circle-outline'} size={28} />
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 17 }}>Novo agendamento</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButtonReserva} onPress={() => navigation.navigate('Reservas')}>
                    <View style={styles.icon}>
                        <Ionicons name={'reader-outline'} size={28} />
                    </View>
                    <View style={styles.text}>
                        <Text style={{ fontSize: 17 }}>Minhas reservas</Text>
                    </View>
                </TouchableOpacity>
        </View>
        </>
    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
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
    icon: {
        alignItems: 'center',

    },
    text: {
        alignItems: 'center',
    },


});