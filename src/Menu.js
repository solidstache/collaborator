import React from 'react';
import { Dropdown, Container, Menu } from 'semantic-ui-react';

const loginForm = [
  { key: 1, text: 'Username', value: 1 },
  { key: 2, text: 'Password', value: 2 },
]

export default () => (
    <Menu className='top-menu'>
      <Container>
          <Menu.Menu position="right">
              <Dropdown text='Login' loginform={loginForm} simple item/>
              <Menu.Item  as="a" name="register" icon="user plus" iconPosition="left">
                  Register
              </Menu.Item>
          </Menu.Menu>
      </Container>
    </Menu>
)
