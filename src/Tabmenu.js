import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import Home from './Home';
import Projects from './Projects';
import Userspage from './Userspage';
import Myprofile from './Myprofile';

export default class MenuTabular extends Component{
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render(){
    const { activeItem } = this.state;
    let pageState = activeItem;
    let page;

    if(pageState === 'home'){
      page = <Home/>;
    }
    if(pageState === 'projects'){
      page = <Projects/>;
    }
    if(pageState === 'users'){
      page = <Userspage/>;
    }
    if(pageState === 'My Profile'){
      page = <Myprofile/>;
    }
    if(pageState === 'My Projects'){
      page = null;
    }

    return (
        <div>
          <Menu attached='top' tabular className='main-manu'>
            <Menu.Item
              icon='home'
              iconPosition='left'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              icon='group'
              iconPosition='left'
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              icon='user'
              iconPosition='left'
              name='users'
              active={activeItem === 'users'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              icon='user circle'
              iconPosition='left'
              name='My Profile'
              active={activeItem === 'My Profile'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              icon='archive'
              iconPosition='left'
              name='My Projects'
              active={activeItem === 'My Projects'}
              onClick={this.handleItemClick}
            />
          </Menu>
          <Segment attached='bottom' className='main-menu'>
            <Container fluid>
            {page}
            </Container>
          </Segment>
        </div>
    );
  }
}
