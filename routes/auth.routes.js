import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SplashAnimated from "../pages/SplashAnimated";
import SignIn from "../pages/SignIn";
import CadastroUser from "../pages/CadastroUser";

const Stack = createStackNavigator();

function AuthRoutes() {
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
        </Stack.Navigator>
    )
};

export default AuthRoutes;