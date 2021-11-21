import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainScreen } from './src/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
            options={{
              title: 'メモ帳',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
