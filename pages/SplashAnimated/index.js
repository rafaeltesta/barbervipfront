import React  from 'react';
import { Button, StyleSheet,Text, View } from 'react-native';
/* Instalado a biblioteca - Lottie -> npx expo install lottie-react-native */
/* Uso para splah's animadas segue o link: https://lottiefiles.com  */
import LottieView from "lottie-react-native";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


export default function Splash() {

  const NavigationContainer = useNavigationContainerRef()

  return (
    <View style={style.container}>
      <LottieView
        source={require('../../assets/face.json')}
        autoPlay={true}
        loop={false}
        style={{width: 400, height: 400}}
        resizeMode="cover"
        /* Precisa de ajustar na rota da Splash */
        onAnimationFinish={() => NavigationContainer.navigate('../routes/AuthRoutes')}
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
})
