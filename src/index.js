import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from "react-native-paper";

const Stack = createNativeStackNavigator();

const Home = () => null;

const App = ({location, context}) => {

  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

};

export default App;
