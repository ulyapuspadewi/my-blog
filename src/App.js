import React from 'react';
import Router from "./routes/Router"
import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./globalStyle";

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router /> 
    </GlobalState>
  );
};

export default App;
