import React from 'react';
import _ from 'lodash'
import faker from 'faker'
import { Dropdown, Container, Menu, Search, Grid, Header, Segment } from 'semantic-ui-react';

const loginForm = [
  { key: 1, text: 'Username', value: 1 },
  { key: 2, text: 'Password', value: 2 },
]

export default () => (
    <Menu className='top-menu'>
      <Container>
	  <Menu.Menu position="center">
	      <SearchProjects/>
	  </Menu.Menu>
          <Menu.Menu position="right">
              <Dropdown text='Login' loginform={loginForm} simple item/>
              <Menu.Item  as="a" name="register" icon="user plus" iconPosition="left">
                  Register
              </Menu.Item>
          </Menu.Menu>
      </Container>
    </Menu>
)

const initialState = {isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
	title: faker.commerce.product(),
	username: faker.internet.userName(),
	image: faker.internet.avatar(),
	jobType: faker.name.jobType(),
}))

// SearchBar included in topmenu so it can always be accessed
export class SearchProjects extends React.Component {
    state = initialState

    // method that gets executed when a result is clicked
    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    // method that handles the actual searching uses the lodash library to help 
    // array and object handling 
    handleSearchChange = (e, { value }) => {
	    this.setState({ isLoading: true, value })
	setTimeout(() => {
	    if (this.state.value.length < 1) return this.setState(initialState)

	    const reg = new RegExp(_.escapeRegExp(this.state.value), 'i')
	    const isMatch = (result) => reg.test(result.title)

	    this.setState({
		    isLoading: false,
		    results: _.filter(source, isMatch),
	    })
        }, 300)
    }

    render() {
      const { isLoading, value, results } = this.state
      return (
	    <Search
	      loading={isLoading}
	      onResultSelect={this.handleResultSelect}
	      onSearchChange={_.debounce(this.handleSearchChange, 500, {
	        leading: true,
	      })}
	      results={results}
	      value={value}
	      {...this.props}
	    />
      )
    }
}
