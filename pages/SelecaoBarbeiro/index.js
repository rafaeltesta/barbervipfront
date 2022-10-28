import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

function SelecaoBarbeiro() {

    const [allBarbeiros, setAllBarbeiros] = useState([]);


    useEffect(() => {
        getAllBarbeiros();
    }, [])


    async function getAllBarbeiros() {
        const response = await api.get('/barbeiro',);
        setAllBarbeiros(response.data);
    }




    const navigation = useNavigation();

    function onClickList(item) {
        //TODO: adicionar o que sera feito ao clicar
        navigation.navigate('Selecao servico');
        console.log(item);
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione o barbeiro desejado:</Text>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={allBarbeiros}
                        //TODO: ver qual vai ser a chave
                        keyExtractor={item => item.nome}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.ContainerView} onPress={() => onClickList(item)}>
                                <Image
                                    source={require('../../assets/barbeiro.png')}
                                    style={styles.avatar}
                                />
                                <View style={styles.ContainerText}>
                                    <Text style={styles.textNome}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </>
    )

};


export default SelecaoBarbeiro;


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
        marginTop: 10,
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
    avatar: {
        width: 50, 
        height: 50, 
        borderRadius: 400 / 2,
   },

});
