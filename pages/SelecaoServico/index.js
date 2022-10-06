import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';


function SelecaoServico() {

    const [servico, setServico] = useState([
        {
            "nome": "corte maquina",
            "tempo": "25",
            "valor": "30",
        },
        {
            "nome": "corte navalha",
            "tempo": "27",
            "valor": "35",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "corte simples",
            "tempo": "20",
            "valor": "20",
        },

    ]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={servico}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.ContainerView}>
                                <Text style={styles.textNome}>{item.nome}</Text>
                                <Text style={styles.textValor}>Valor: R$ {item.valor}</Text>
                                <Text style={styles.textTempo}>Tempo: {item.tempo} min</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    )

};


export default SelecaoServico;


const styles = StyleSheet.create({

    ContainerView: {
        marginBottom: 15,
        padding: 15,
        borderRadius: 4,
        backgroundColor: "#eee",
    
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#eee"
    },

    textNome: {
        fontSize: 15,
        color: "#333",
        fontWeight: "bold",
        marginTop: 4,
        textAlign: "center"
    },

    textTempo: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "center"
    },

    textValor: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "center"
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#FFF"
    },

    body: {
        flex: 1
    },

    FlatList: {
        flex: 1,
        marginTop: 5
    },
});