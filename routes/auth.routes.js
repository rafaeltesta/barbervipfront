import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashAnimated from "../pages/SplashAnimated";
import SignIn from "../pages/SignIn";
import CadastroUser from "../pages/CadastroUser";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Splash" component={SplashAnimated} />
            <AuthStack.Screen name="Login" component={SignIn} />
            <AuthStack.Screen name="Cadastre-se" component={CadastroUser}/>
            
        </AuthStack.Navigator>
    )
};

export default AuthRoutes;