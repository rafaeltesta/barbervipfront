import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import Home from "../pages/Home";
import Reservas from "../pages/Reservas";
import CadastroServico from "../pages/CadastroServico";


const Tab = createBottomTabNavigator();

function MainTabBarber() {
    return (
        <Tab.Navigator
           
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Cadastro Serviço') {
                        iconName = focused ? 'home-outline' : 'home';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                // headerShown: false,
            })}

        >
            {/* Inserir nova rota utilizar drawer.screen  */}
            {/* <Tab.Screen name="Home" component={Home} /> */}
            {/* <Tab.Screen name="Agendar" component={SelecaoBarbearia} /> */}
            {/* <Tab.Screen name="Reservas" component={Reservas} /> */}
            <Tab.Screen name="Cadastro Serviço" component={CadastroServico} />
        </Tab.Navigator>
    )

};

export default MainTabBarber;