import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';


function SelecaoBarbearia() {

    const [servico, setServico] = useState([
        {
            "nome": "Corte maquina",
            "tempo": "25",
            "valor": "30",
        },
        {
            "nome": "Corte navalha",
            "tempo": "27",
            "valor": "35",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte simples",
            "tempo": "20",
            "valor": "20",
        },

    ]);

    function onClickList(item){
        //TODO: adicionar o que sera feito ao clicar
        console.log(item);
    }

    useEffect(() => {
        //TODO: Adicionar metodo da chamada da API para buscar servicos
    }, [])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={servico}
                        //TODO: ver qual vai ser a chave
                        keyExtractor={item => item.nome}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={ () => onClickList(item)}>
                                <View style={styles.ContainerView}>
                                    <Text style={styles.textNome}>{item.nome}</Text>
                                    <Text style={styles.textValor}>Valor: R$ {item.valor}</Text>
                                    <Text style={styles.textTempo}>Tempo: {item.tempo} min</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </>
    )

};


export default SelecaoBarbearia;


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
