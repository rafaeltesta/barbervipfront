import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
/* Instalado a biblioteca - Lottie -> npx expo install lottie-react-native */
/* Uso para splah's animadas segue o link: https://lottiefiles.com  */
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

function Splash() {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      const barbeiroCd = await AsyncStorage.getItem('barbeiroCd');
      const cdUser = await AsyncStorage.getItem('cdUser');

      console.log(cdUser)

      if (token !== null) {

        //validar token
        var res = await api.get('/checktoken/'+ cdUser, { 
          params: { token } 
        });
        if (res.config.params.token) {

          await AsyncStorage.setItem('token', res.config.params.token);

          userDispatch({
            type: 'setCdUser',
            payload: {
              cdUser: res.data.cdUser
            }          
          });
  
          userDispatch({
            type: 'setNome',
            payload: {
              nome: res.data.userName
            }
          });
  
          userDispatch({
            type: 'setCdBarbeiro',
            payload: {
              cdBarbeiro: res.data.barbeiroCd
            }
          });
  

          if (barbeiroCd != 'null') {
            navigation.navigate('MainTabBarber');
          } else {
            navigation.navigate('MainTab');
          };

        }
      } else {
        navigation.navigate('Login');
      }
    }
    checkToken();

    navigation.navigate('Login');
  }, []);


  return (
    <View style={style.container}>
      <LottieView
        source={require('../../assets/face.json')}
        autoPlay={true}
        loop={false}
        style={{ width: 400, height: 400 }}
        resizeMode="cover"
      // onAnimationFinish={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }
});

export default Splash;
