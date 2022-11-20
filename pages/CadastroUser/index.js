import React, { useState } from "react";
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,
} from "react-native";

/* Henrique 10/10 Included Hide Password */
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
/* Henrique 10/10 Creating email mask sem sucesso ainda*/
import { TextInputMask } from "react-native-masked-text";

function CadastroUser({ navigation }, params) {

  /*Henrique 10/10 A partir da Linha52 esta executando estas 2 function */
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [inputRepeat, setRepeatInput] = useState("");
  const [hideRepeatPass, setHideRepeatPass] = useState(true);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");


  async function handleSubmit() {

    if(input != inputRepeat){
      alert("Senhas não coincidem!");
    }else{
      try {
        const response = await api.post('/user', {
          nome: nome,
          email: email,
          senha: input
        })
  
        alert("Cadastrado com sucesso!");
        navigation.navigate('Login');
      } catch (error) {
        const { data } = error.response;
        alert(data.error);
      }
    }

   


  }


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/logo_barber_vip.png")} />
      </View>

      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Cadastre-se Usando Facebook
          </Text>
        </TouchableOpacity>

        <Text style={styles.textOu}>
          --------------------------- ou ---------------------------
        </Text> */}

        <Text style={styles.textLabel}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu nome"
          autoCorrect={false}
          onChangeText={(texto) => {setNome(texto)}}
        />


        <Text style={styles.textLabel}>E-MAIL </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu e-mail"
          autoCorrect={false}
          onChangeText={(texto) => {setEmail(texto)}}
        />

        {/* Henrique-10\10 - include hide password  */}
        <Text style={styles.textLabel}>DIGITE SUA SENHA </Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Informe a senha desejada"
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

        <Text style={styles.textLabel}>REPITA SUA SENHA </Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Repita sua senha"
            autoCorrect={false}
            onChangeText={(texto) => setRepeatInput(texto)}
            value={inputRepeat}
            secureTextEntry={hideRepeatPass}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHideRepeatPass(!hideRepeatPass)}
          >
            {hideRepeatPass ? (
              <Ionicons name="eye" color="#111" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#111" size={25} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.registerText}>Já possui conta? Login</Text>
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
    paddingBottom: 75,
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
    alignItems: 'flex-start'
  }
});

export default CadastroUser;
