import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SplashAnimated from "../pages/SplashAnimated";
import SignIn from "../pages/SignIn";
import CadastroUser from "../pages/CadastroUser";
import MainTab from "./MainTab.routes";
import SelecaoServico from "../pages/SelecaoServico";
import SelecaoBarbeiro from "../pages/SelecaoBarbeiro";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import EditarServico from "../pages/EditarServico";
import ListaServicos from "../pages/ListaServicos";

const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={SplashAnimated} />
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Cadastre-se" component={CadastroUser} />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="Selecao servico" component={SelecaoServico} />
            <Stack.Screen name="Selecao barbeiro" component={SelecaoBarbeiro} />
            <Stack.Screen name="Selecao barbearia" component={SelecaoBarbearia} />
            <Stack.Screen name="Editar servico" component={EditarServico} />
            <Stack.Screen name="Lista servicos" component={ListaServicos} />
        </Stack.Navigator>
    )
};

export default MainStack;