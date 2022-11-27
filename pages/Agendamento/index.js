import React, { useState, useEffect, useRoute } from 'react';
import { View, KeyboardAvoidingView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import {DateTimePickerAndroid } from '@react-native-community/datetimepicker';

function Agendamentos({ navigate, route, navigation }) {

    const [date, setDate] = useState(new Date());
    const [hours, setHours] = useState([]);
    
    
    useEffect(() => {
      async function loadAvailable() {
        const response = await api.get(`/providers/available/` + route.params.cdBarbeiro, {
          params: {
            date: date.getTime(),
          },
        });
        setHours(response.data);

      }
      loadAvailable();
    }, [date]);
  
 

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;

      setDate(currentDate);
      
    };
  
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    function handleSelectHour(horario) {
        navigation.navigate('Confirm', {
            horario,
          servicoCd: route.params.cdServico,
          barbeiroCd: route.params.cdBarbeiro,
        });
      }
   
    return (
        <KeyboardAvoidingView style={styles.background}>
            <Text style={styles.title}>Selecione um horário</Text>
            <View style={styles.container}>
            </View>
            < TouchableOpacity style={styles.btnSubmit}  onPress={showDatepicker}>
                <Text style={styles.submitText}>Selecione uma data</Text>
            </TouchableOpacity >

            <FlatList
                style={styles.flatlist}
                data={hours}
                //TODO: ver qual vai ser a chave
                // keyExtractor={item => item.nome}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.ContainerView} onPress={() => item.available ? handleSelectHour(item.value) : null}>
                        <View style={item.available ? styles.TextView : styles.TextViewOp}>
                            <View style={styles.DiaSemana}>
                                <Text style={styles.textDiaSemana}>{item.time}</Text>                  
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
            />
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

    TextViewOp: {
        backgroundColor: "tomato",
        borderRadius: 10,
        marginLeft: 5,
        padding: 5,
        opacity: 0.5,
    },
});

export default Agendamentos;