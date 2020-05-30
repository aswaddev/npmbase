import React from 'react';
import { Container } from 'reactstrap';

import Header from './layouts/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
