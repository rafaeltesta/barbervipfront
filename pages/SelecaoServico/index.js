import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function SelecaoServico() {

    const [servico, setServico] = useState([
        {
            "nome": "Corte maquina",
            "tempo": "25",
            "valor": "30",
        },
        {
            "nome": "dgdgrg",
            "tempo": "27",
            "valor": "35",
        },
        {
            "nome": "drgdrgdr",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte sefefeff",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte sefsefse",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fssefsefsef",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte sfsffsefseffseff",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fthfthfthjjftjftj",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fththjfjftjtjfft",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte ftfthfthjfjftjjf",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte ffthfthfthfthfhth",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fthftfththfthfthft",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fhtfthftthft",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte ftthfthh",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fwefefewef",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fthfhfthfth",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fthfthfththt",
            "tempo": "20",
            "valor": "20",
        },
        {
            "nome": "Corte fththfthftfth",
            "tempo": "20",
            "valor": "20",
        },

    ]);

    const navigation = useNavigation();

    function onClickList(item) {
        //TODO: adicionar o que sera feito ao clicar
        navigation.navigate('')
        console.log(item);
    }

    useEffect(() => {
        //TODO: Adicionar metodo da chamada da API para buscar servicos
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione o serviço desejado:</Text>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={servico}
                        //TODO: ver qual vai ser a chave
                        keyExtractor={item => item.nome}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.ContainerView} onPress={() => onClickList(item)}>
                                <Image
                                    source={require('../../assets/servico.png')}
                                    style={styles.avatar}
                                />
                                <View style={styles.ContainerText}>
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


export default SelecaoServico;


const styles = StyleSheet.create({

    ContainerView: {
        marginBottom: 8,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "tomato",
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#eee",
    },
    
    ContainerText: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "left",
        marginLeft: 10,
    },

    textNome: {
        fontSize: 15,
        color: "#333",
        fontWeight: "bold",
        marginTop: 4,
        textAlign: "left"
    },

    textTempo: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "left"
    },

    textValor: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "left"
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FFF",
        marginTop: 33,
    },

    body: {
        flex: 1
    },

    FlatList: {
        flex: 1,
        marginTop: 5,

    },

    title: {
        textAlign: "center",
        fontSize: 21,
        backgroundColor: "#FFF",
        marginBottom: 12,
    },
    // avatar: {
    //      width: 50, 
    //      height: 50, 
    //      borderRadius: 400 / 2,
    //      flex: 1,
    //      alignSelf: "flex-end",

    // }
});
