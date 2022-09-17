/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import reducers from './storeredux/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import  'react-native-get-random-values'
const store = createStore(reducers)

const RNRedux = () => (
  <>    
    <Provider store = { store }>
      <App />
    </Provider>
    </>
  )
AppRegistry.registerComponent(appName, () => RNRedux);
