import React, { useState } from 'react';
import './App.css';
import Pacientes from './components';
import '@fontsource/roboto/400.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { PacientesProvider } from './contexto/PacienteContext'
import Login from './pages/login';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/pacientes'>
            <PacientesProvider>
              <Pacientes />
            </PacientesProvider>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );

}
