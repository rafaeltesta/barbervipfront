import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

function SelecaoBarbearia() {

    const [allBarbearias, setAllBarbearias] = useState([]);


    useEffect(() => {
        getAllBarbearias();
    }, [])


    async function getAllBarbearias() {
        const response = await api.get('/barbearia',);
        setAllBarbearias(response.data);
    }




    const navigation = useNavigation();

    function onClickList(item) {
        //TODO: adicionar o que sera feito ao clicar
        navigation.navigate('Selecao barbeiro');
    }


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione a barbearia desejada:</Text>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={allBarbearias}
                        //TODO: ver qual vai ser a chave
                        keyExtractor={item => item.nome}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.ContainerView} onPress={() => onClickList(item)}>
                                <Image
                                        source={require('../../assets/barber.png')}
                                        style={styles.avatar}
                                    />
                                <View style={styles.ContainerText}>
                                    <Text style={styles.textNome}>{item.nome}</Text>
                                    <Text style={styles.textEndereco}>Endereço: {item.endereco}</Text>
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

    },

    textEndereco: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,

    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#FFF",
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
