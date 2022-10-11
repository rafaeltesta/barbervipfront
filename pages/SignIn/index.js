// import { Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text, StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CadastroUser } from "../CadastroUser/index";

function SignIn({ navigation }, params) {
  /* A partir da Linha52 esta executandoe estas 2 function */
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logo_barber_vip.png")} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Login Usando Facebook</Text>
        </TouchableOpacity>

        <Text style={styles.textOu}>
          --------------------------- ou ---------------------------
        </Text>

        <Text style={styles.textLabel}>E-MAIL </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu E-mail"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        {/* Henrique-10\10 - include hide password  */}
        <Text style={styles.textLabel}>SENHA </Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Insira sua senha"
            autoCorrect={false}
            onChangeText={(texto) => setInput(texto)}
            value={input}
            secureTextEntry={hidePass}
          />

          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" color="#111" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#111" size={25} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Cadastre-se")}
        >
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 60,
  },

  input: {
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#222",
  },
  /* Criando o olhinho da senha */
  inputArea: {
    flexDirection: "row",
    marginBottom: 15,
    width: "90%",
    heigh: 50,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#222",
  },

  inputSenha: {
    width: "85%",
    height: "80%",
    padding: 8,
    fontSize: 18,
  },

  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
  },

  btnSubmit: {
    backgroundColor: "#35aaff",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {},

  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },

  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
  },

  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },

  textOu: {
    padding: 30,
    fontSize: 16,
  },

  textLabel: {
    fontSize: 9,
    fontWeight: 'bold',
  }
});

export default SignIn;
