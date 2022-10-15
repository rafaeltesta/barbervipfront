import React from "react";
import SelecaoBarbearia from "../pages/SelecaoBarbearia";
import CadastroServico from "../pages/CadastroServico";
import SelecaoServico from "../pages/SelecaoServico";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function ClienteRoutes() {
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
            })}

        >
            {/* Inserir nova rota utilizar drawer.screen  */}
            <Tab.Screen name="Home" component={SelecaoBarbearia} />
            <Tab.Screen name="Agendar" component={SelecaoServico} />
            <Tab.Screen name="Reservas" component={CadastroServico} />
        </Tab.Navigator>
    )

};

export default ClienteRoutes;