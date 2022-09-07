import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Singnin from './pages/componentes/Singnin';
import CadastroUser from './pages/componentes/CadastroUser';

export default function App() {
  return (
    <>
      <Singnin></Singnin>
      {/* <CadastroUser></CadastroUser> */}
      <StatusBar style="light" />
    </>
  );
}

