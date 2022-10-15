import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CadastroServico from "../pages/CadastroServico";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroUser from "../pages/CadastroUser";

const Tab = createBottomTabNavigator();

function BarbeiroRoutes() {
  return (
    <Tab.Navigator useLegacyImplementation>
      <Tab.Screen name="Cadastro serviço" component={CadastroServico} />
    </Tab.Navigator>
  )

};

export default BarbeiroRoutes;