import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './routes/auth.routes.js';
import ClienteRoutes from './routes/cliente.routes.js';
import BarbeiroRoutes from './routes/barbeiro.routes.js';


export default function App() {
  return (
    <NavigationContainer>
        <AuthRoutes></AuthRoutes>
        {/* <BarbeiroRoutes></BarbeiroRoutes> */}
        {/* <ClienteRoutes></ClienteRoutes> */}
    </NavigationContainer>

  );
}