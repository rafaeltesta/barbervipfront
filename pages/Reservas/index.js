import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api'
import { UserContext } from '../../contexts/UserContext';

function Reservas() {

    const [allReservas, setAllReservas] = useState([]);
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {

        getAllReservas();
    }, [allReservas])

    async function getAllReservas() {
        const response = await api.get('/reservas/' + state.cdUser)

        setAllReservas(response.data);
    }



    async function handleDelete(cdAgendamento) {

        try {
            const response = await api.delete('/agendamento/' + cdAgendamento, {

            })

            alert("Excluido com sucesso!");
        } catch (error) {
            const { data } = error.response;
            alert(data.error);
        }


    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        style={styles.flatlist}
                        data={allReservas}
                        //TODO: ver qual vai ser a chave
                        keyExtractor={item => item.cdAgendamento}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.ContainerView} >
                                <View style={styles.ContainerText}>
                                    <Text style={styles.textNome}>{item.servico}</Text>
                                    <Text style={styles.textValor}>Barbeiro: {item.barbeiro}</Text>
                                    <Text style={styles.textValor}>Horario: {new Date(item.horario).getDate()}/{new Date(item.horario).getMonth() + 1}/{new Date(item.horario).getFullYear()} {new Date(item.horario).getHours()}:{new Date(item.horario).getMinutes()}</Text>
                                    <TouchableOpacity style={styles.btnCancelar} onPress={() => handleDelete(item.cdAgendamento)}>
                                        <Text style={styles.textCancelar}>Cancelar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    )
}

export default Reservas;



const styles = StyleSheet.create({

    ContainerView: {
        marginBottom: 8,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "tomato",
        display: "flex",
        // flexDirection: "row",
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

    textValor: {
        fontSize: 12,
        color: "#333",
        marginTop: 4,
        textAlign: "left"
    },

    textCancelar: {
        fontSize: 18,
        color: "white",
        // marginTop: 4,
        fontWeight: "bold",
        textAlign: "center",
    },

    btnCancelar: {
        color: "#333",
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#333",
        width: "50%",
        marginLeft: 80
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
        marginTop: 7
    },
});
