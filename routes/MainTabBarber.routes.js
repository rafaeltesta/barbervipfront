import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CadastroServico from "../pages/CadastroServico";
import AgendamentosBarbeiro from "../pages/AgendamentosBarbeiro";
import HomeBarbeiro from "../pages/HomeBarbeiro";


const Tab = createBottomTabNavigator();

function MainTabBarber() {
    return (
        <Tab.Navigator
           
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Cadastro Serviço') {
                        iconName = focused ? 'add-circle-outline' : 'add-circle';
                    } else if (route.name === 'Agendamentos') {
                        iconName = focused ? 'reader-outline' : 'reader';
                    }else if (route.name === 'Home') {
                        iconName = focused ? 'home-outline' : 'home';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                // headerShown: false,
            })}

        >
            <Tab.Screen name="Home" component={HomeBarbeiro} />
            <Tab.Screen name="Agendamentos" component={AgendamentosBarbeiro} />
            <Tab.Screen name="Cadastro Serviço" component={CadastroServico} />
        </Tab.Navigator>
    )

};

export default MainTabBarber;