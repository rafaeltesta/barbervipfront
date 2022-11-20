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
import MainTabBarber from "./MainTabBarber.routes";
import Agendamento from "../pages/Agendamento";
import Agendamentos from "../pages/Agen";
import Confirm from "../pages/ConfirmAgendamento";

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
            <Stack.Screen name="MainTabBarber" component={MainTabBarber} />
            <Stack.Screen name="Selecao servico" component={SelecaoServico} />
            <Stack.Screen name="Selecao barbeiro" component={SelecaoBarbeiro} />
            <Stack.Screen name="Selecao barbearia" component={SelecaoBarbearia} />
            <Stack.Screen name="Editar serviço" component={EditarServico} />
            <Stack.Screen name="Lista de serviços" component={ListaServicos} />
            <Stack.Screen name="Agendamento" component={Agendamento} />
            <Stack.Screen name="Agendamentos" component={Agendamentos} />
            <Stack.Screen name="Confirm" component={Confirm} />
        </Stack.Navigator>
    )
};

export default MainStack;