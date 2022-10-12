import React  from 'react';
import { Button, StyleSheet,Text, View } from 'react-native';
/* Instalado a biblioteca - Lottie -> npx expo install lottie-react-native */
/* Uso para splah's animadas segue o link: https://lottiefiles.com  */
import LottieView from "lottie-react-native";
import {Signin} from '../SignIn/index';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


 function Splash({ navigation}, params) {



  return (
    <View style={style.container}>
      <LottieView
        source={require('../../assets/face.json')}
        autoPlay={true}
        loop={false}
        style={{width: 400, height: 400}}
        resizeMode="cover"
        onAnimationFinish={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default Splash;
