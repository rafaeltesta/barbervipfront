import React from "react";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroServico from "../pages/CadastroServico";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ClienteRoutes() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Seleção Barbearia" component={SelecaoBarbearia} />
        </Drawer.Navigator>
    )

};

export default ClienteRoutes;