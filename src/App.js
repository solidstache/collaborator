import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import Menu from './Menu';
import Tabmenu from './Tabmenu';

const App = () => (
    <Fragment>
      <Menu/>
      <Container>
        <h1 className='logo'>Collaborator</h1>
      </Container>
      <Container>
          <Tabmenu/>
      </Container>
    </Fragment>
);

export default App;
