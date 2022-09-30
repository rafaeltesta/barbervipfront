import React from "react";
import CadastroServico from "../pages/CadastroServico";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroUser from "../pages/CadastroUser";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function BarbeiroRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Cadastro serviço" component={CadastroServico} />
    </Drawer.Navigator>
  )

};

export default BarbeiroRoutes;