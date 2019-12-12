import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import Home from './Home';
import ProjectList from './Projects';
import UsersPage from './Userspage';
//import MyProfile from './MyProfile';
import MyProject from './Myprojects';
import ProfileEdit from './ProfileEdit'
//import MyProfile from './Experiment';


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
      page = <ProjectList/>;
    }
    if(pageState === 'users'){
      page = <UsersPage/>;
    }
    if(pageState === 'My Profile'){
      page = <ProfileEdit/>;
    }
    if(pageState === 'My Projects'){
      page = <MyProject/>;
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
