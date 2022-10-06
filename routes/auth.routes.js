import React from "react";
import SignIn from "../pages/SignIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroUser from "../pages/CadastroUser";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={SignIn} />
            <AuthStack.Screen name="Cadastre-se" component={CadastroUser}/>
        </AuthStack.Navigator>
    )
};

export default AuthRoutes;