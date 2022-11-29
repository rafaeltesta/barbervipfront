import React, { useState, useMemo } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DateInput({ date, onChange }) {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DateTimePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DateTimePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);
      onChange(selectedDate);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dateButton} onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <Text style={styles.text}>{dateFormatted}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

    container: {
        margin: "60px 0 30px"
    },

    dateButton: {
        padding: "0 15px",
        height: 46,
        // background: rgba(0, 0, 0, 0.1),
        borderRadius: 4,
        margin: "0 30px",
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        fontSize: 14,
        color: "#fff",
        marginLeft: 15,
    },
})