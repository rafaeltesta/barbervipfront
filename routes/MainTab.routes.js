import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import Home from "../pages/Home";
import Reservas from "../pages/Reservas";
import CadastroServico from "../pages/CadastroServico";


const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
           
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-outline' : 'home';
                    } else if (route.name === 'Agendar') {
                        iconName = focused ? 'calendar-outline' : 'calendar';
                    } else if (route.name === 'Reservas') {
                        iconName = focused ? 'reader-outline' : 'reader';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                // headerShown: false,
            })}

        >
            {/* Inserir nova rota utilizar drawer.screen  */}
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Agendar" component={SelecaoBarbearia} />
            <Tab.Screen name="Reservas" component={Reservas} />
            <Tab.Screen name="C Serviço" component={CadastroServico} />
        </Tab.Navigator>
    )

};

export default MainTab;