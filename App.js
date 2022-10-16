import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './routes/MainStack.routes';

export default function App() {
  return (
    <NavigationContainer>
        <MainStack></MainStack>
    </NavigationContainer>

  );
}