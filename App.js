import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
import {AuthProvider} from "./src/context/AuthContext";
import {
  Text,
  View,
} from 'react-native';

const App: () => Node = () => {

  return (
      <NavigationContainer>
          <AuthProvider>
              <Navigation/>
          </AuthProvider>
      </NavigationContainer>
  );
};



export default App;
