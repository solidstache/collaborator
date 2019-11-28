import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Home from './Home';

export default class MenuTabular extends Component{
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render(){
    const { activeItem } = this.state;

    return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item
              icon='home'
              iconPosition='left'
              name='Home'
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
          </Menu>
          <Segment attached='bottom'>
               <Home/>
          </Segment>
        </div>
    )
  }
}
