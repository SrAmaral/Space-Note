import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Colors from './styles/Colors';

import Routes from './routes/Routes';

import {NoteProvider} from './context/NoteCotext';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NoteProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.background}
          translucent
        />
        <Routes />
      </NoteProvider>
    </NavigationContainer>
  );
};

export default App;
