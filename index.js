/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import  'react-native-get-random-values'
import { store } from 'app/store';

const Index = () => (
  <>    
    <Provider store = { store }>
      <App />
    </Provider>
    </>
  )
AppRegistry.registerComponent(appName, () => Index);
