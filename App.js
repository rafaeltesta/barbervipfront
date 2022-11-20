import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './routes/MainStack.routes';
import UserContextProvider from './contexts/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack></MainStack>
      </NavigationContainer>
    </UserContextProvider>

  );
}