import React from 'react';
import './App.css';
import Calculator from './page/Calculator/Calculator';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
