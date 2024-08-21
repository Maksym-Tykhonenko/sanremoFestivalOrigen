import {useRef, useState, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  About,
  GameScreen,
  MainScreen,
  ProfileScreen,
  QuizGameScreen,
  QuizScreen,
  TrueFalseGame,
  TrueFalseScreen,
} from './screen';
import {AppProvider} from './store/app_context';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="TrueFalseScreen" component={TrueFalseScreen} />
          <Stack.Screen name="TrueFalseGame" component={TrueFalseGame} />
          <Stack.Screen name="QuizScreen" component={QuizScreen} />
          <Stack.Screen name="QuizGameScreen" component={QuizGameScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="AboutScreen" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
