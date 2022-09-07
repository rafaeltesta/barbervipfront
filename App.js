import React from 'react';
import Singnin from './pages/componentes/Singnin';
import CadastroUser from './pages/componentes/CadastroUser';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Singnin} />
        <Stack.Screen name="Cadastre-se" component={CadastroUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

