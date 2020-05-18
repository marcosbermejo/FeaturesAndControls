import React from 'react';

import Dashboard from './containers/Dashboard';
import './App.css';
import { Container } from '@material-ui/core';

const App = (props) => {
  return (
    <Container maxWidth={false}>
      <Dashboard />
    </Container>
  );
}

export default App;
