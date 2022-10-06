import React from 'react'
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function SelecaoBarbearia() {
    return (
        <View >
            <TextInput

                placeholder="Nome"
                autoCorrect={false}
                onChangeText={() => { }}
            />
        </View>
    );
}


export default SelecaoBarbearia;