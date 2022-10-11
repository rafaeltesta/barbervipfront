import React from "react";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroServico from "../pages/CadastroServico";
import SelecaoServico from "../pages/SelecaoServico";


import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ClienteRoutes() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            {/* Inserir nova rota utilizar drawer.screen  */}
            <Drawer.Screen name="Seleção Barbearia" component={SelecaoBarbearia} />
            <Drawer.Screen name="Seleção Serviço" component={SelecaoServico} />
         
        </Drawer.Navigator>
    )

};

export default ClienteRoutes;