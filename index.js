/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducers)
const RNRedux = () => (
  <>    
    <Provider store = { store }>
      <App />
    </Provider>
    </>
  )
AppRegistry.registerComponent(appName, () => RNRedux);
