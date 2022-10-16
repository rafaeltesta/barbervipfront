import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SplashAnimated from "../pages/SplashAnimated";
import SignIn from "../pages/SignIn";
import CadastroUser from "../pages/CadastroUser";
import MainTab from "./MainTab.routes";
import SelecaoServico from "../pages/SelecaoServico";

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
        </Stack.Navigator>
    )
};

export default MainStack;