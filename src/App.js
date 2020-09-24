import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { configureStore } from './store';
import { Main } from './pages/Main';
import { History } from './pages/History';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
`

const store = configureStore();

export function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/history" component={History} />
      </Switch>
    </Provider>
  );
}