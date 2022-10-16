import React, { useEffect }  from 'react';
import { StyleSheet, View } from 'react-native';
/* Instalado a biblioteca - Lottie -> npx expo install lottie-react-native */
/* Uso para splah's animadas segue o link: https://lottiefiles.com  */
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';



 function Splash() {

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token){
        //validar token
        navigation.navigate('Login');
      } else {
        navigation.navigate('Login');
      }
    }
    checkToken(); 
  }, []);


  return (
    <View style={style.container}>
      <LottieView
        source={require('../../assets/face.json')}
        autoPlay={true}
        loop={false}
        style={{width: 400, height: 400}}
        resizeMode="cover"
        // onAnimationFinish={() => navigation.navigate('Login')}
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
