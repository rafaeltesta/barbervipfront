import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './pages/componentes/SignIn';
import CadastroUser from './pages/componentes/CadastroUser';
import 'react-native-gesture-handler';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroServico from './pages/CadastroServico';
// import Navigation from './pages/componentes/Navigation';
// const Stack = createNativeStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Login" component={SignIn} />
      <Drawer.Screen name="Cadastro serviço" component={CadastroServico} />
      <Drawer.Screen name="Cadastre-se" component={CadastroUser} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}