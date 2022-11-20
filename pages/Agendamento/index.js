import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

function Agendamento({ navigate, route }) {

    const navigation = useNavigation();

    const [ano, setAno] = useState(0);
    const [mes, setMes] = useState(0);
    const [dia, setDia] = useState(0);
    const [hora, setHora] = useState(null);
    const [listaDias, setListaDias] = useState([]);
    const [listaHoras, setListaHoras] = useState([]);

    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const dias = [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
    ];



    useEffect(() => {
        let diasNoMes = new Date(ano, mes + 1, 0).getDate();
        let newListDias = [];

        for (let i = 1; i < diasNoMes; i++) {

            let d = new Date(ano, mes, i);
            let anoTemp = d.getFullYear();
            let mesTemp = d.getMonth() + 1;
            let diaTemp = d.getDate();
            mesTemp = mesTemp < 10 ? '0' + mesTemp : mesTemp;
            diaTemp = diaTemp < 10 ? '0' + diaTemp : diaTemp;
            let dataSelec = anoTemp + '-' + mesTemp + '-' + diaTemp;


            newListDias.push({
                status: true,
                diaSemana: dias[d.getDay()],
                numeroDia: i,
            });
        }

        setListaDias(newListDias);
        setDia(0);
        setListaHoras([]);
        setHora(0);

    }, [mes, ano]);

    useEffect(() => {
        let today = new Date();
        setAno(today.getFullYear());
        setMes(today.getMonth());
        setDia(today.getDate());
    }, []);


    async function handleSubmit() {


    };

    async function handlePrevClick() {
        let mountDate = new Date(ano, mes, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setAno(mountDate.getFullYear());
        setMes(mountDate.getMonth());
        setDia(0);
    };

    async function handleNextClick() {
        let mountDate = new Date(ano, mes, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setAno(mountDate.getFullYear());
        setMes(mountDate.getMonth());
        setDia(0);
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.title}>Selecione um horário</Text>
            <View style={styles.container}>

                <TouchableOpacity style={styles.btnPrev} onPress={handlePrevClick}>
                    <Text style={styles.submitText}>{"<"}</Text>
                </TouchableOpacity>

                <Text style={styles.date}>{meses[mes]} {ano}</Text>

                <TouchableOpacity style={styles.btnNext} onPress={handleNextClick}>
                    <Text style={styles.submitText}>{">"}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.flatlist}
                data={listaDias}
                //TODO: ver qual vai ser a chave
                // keyExtractor={item => item.nome}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.ContainerView} onPress={() => onClickList(item)}>
                        <View style={styles.TextView}>
                            <View style={styles.DiaSemana}>
                                <Text style={styles.textDiaSemana}>{item.diaSemana}</Text>
                            </View>
                            <View style={styles.Dia}>
                                <Text style={styles.textDia}>{item.numeroDia}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
            />

            {listaHoras.length > 0 &&
                <FlatList
                    style={styles.flatlist}
                    data={listaHoras}
                    //TODO: ver qual vai ser a chave
                    // keyExtractor={item => item.nome}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.ContainerView} onPress={() => onClickList(item)}>
                            <View style={styles.TextView}>
                                <View style={styles.DiaSemana}>
                                    <Text style={styles.textDiaSemana}>{item.diaSemana}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                />
            }

            < TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit} >
                <Text style={styles.submitText}>Selecionar horário</Text>
            </TouchableOpacity >
        </KeyboardAvoidingView >

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
        // paddingBottom: 60,
        flexDirection: 'row'
    },


    btnSubmit: {
        backgroundColor: '#35aaff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        // marginTop: 50,
        marginBottom: 70
    },

    btnPrev: {
        backgroundColor: "tomato",
        width: '14%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 50,
    },

    btnNext: {
        backgroundColor: "tomato",
        width: '14%',
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
        marginTop: 120,
        textAlign: "center",
        fontSize: 21,
        backgroundColor: "#FFF",
        marginBottom: 12,
    },

    date: {
        marginTop: 50,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#FFF",
    },

    flatlist: {
        flex: 1,
        marginLeft: 30,
        marginRight: 40,

    },

    DiaSemana: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        // marginLeft: 20,
        fontSize: 30,
    },

    Dia: {
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        // marginLeft: 20,

    },

    textDiaSemana: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,

    },

    textDia: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    },

    TextView: {
        backgroundColor: "tomato",
        borderRadius: 10,
        marginLeft: 5,
        padding: 5,
    },
});

export default Agendamento;