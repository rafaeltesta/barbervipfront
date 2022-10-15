import React from "react";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroServico from "../pages/CadastroServico";
import SelecaoServico from "../pages/SelecaoServico";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

function ClienteRoutes() {
    return (
        <Tab.Navigator useLegacyImplementation>
            {/* Inserir nova rota utilizar drawer.screen  */}
            <Tab.Screen name="Seleção Barbearia" component={SelecaoBarbearia} />
            <Tab.Screen name="Seleção Serviço" component={SelecaoServico} />
         
        </Tab.Navigator>
    )

};

export default ClienteRoutes;