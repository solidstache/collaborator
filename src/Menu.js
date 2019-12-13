import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Container, Menu, Search,  Form, Input, Button, Label } from 'semantic-ui-react';

export default () => (
    <Menu className='top-menu'>
      <Container>
	  <Menu.Menu position="left">
      <SearchProjects/>
	  </Menu.Menu>
      <Menu.Menu position="right">
        <LoginForm/>
	    </Menu.Menu>
      </Container>
    </Menu>
)

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.status = "NoUser";
		this.userName = "";
	}

	handleLoginClicked() {
		this.status = "LoggingIn";
		this.forceUpdate();
	}
	// Change this.userName assignment to be what was actually typed
	handleLogin() {
		this.status = "LoggedIn";
		// Issue with using forms in react, so it doesn't actually set what was typed
		this.userName = "user1";
		this.forceUpdate();
	}

	render() {
		if(this.status === "NoUser") {
			return (
			<Menu.Menu>
        <Menu.Item as="a" name="login"
			  onClick={() => this.handleLoginClicked()}>
				Login
			</Menu.Item>
        <Menu.Item  as="a" name="register" >
          Register
        </Menu.Item>
		</Menu.Menu>);
		} else if(this.status === "LoggingIn") {
			return (
			<Menu.Item as="a" name="login">
			  <Form>
			    <Form.Field>
			      <Input placeholder='Username'/>
			    </Form.Field>

			    <Form.Field>
			      <Input placeholder='Password'/>
			    </Form.Field>

			    <Form.Field>
			      <Button type='submit'
				      onClick={() => this.handleLogin()}>Submit </Button>
			    </Form.Field>
			  </Form>
			</Menu.Item>
			);
		} else {
			return (
			<Menu.Item as="a" name="login">
				Welcome, {this.userName}
			</Menu.Item>
		);
		}
	}
}


const initialState = {isLoading: false, results: [], value: '' };

const source = _.times(5, () => ({
	title: faker.commerce.product(),
	username: faker.internet.userName(),
	image: faker.internet.avatar(),
	jobType: faker.name.jobType(),
}));

// SearchBar included in topmenu so it can always be accessed
export class SearchProjects extends React.Component {
    state = initialState;

    // method that gets executed when a result is clicked
    handleResultSelect = (e, { result }) => this.setState({ value: result.title });

    // method that handles the actual searching uses the lodash library to help
    // array and object handling
    handleSearchChange = (e, { value }) => {
	    this.setState({ isLoading: true, value });
	setTimeout(() => {
	    if (this.state.value.length < 1) return this.setState(initialState);

	    const reg = new RegExp(_.escapeRegExp(this.state.value), 'i');
	    const isMatch = (result) => reg.test(result.title);

	    this.setState({
		    isLoading: false,
		    results: _.filter(source, isMatch),
	    })
        }, 300)
    };

    render() {
      const { isLoading, value, results } = this.state;
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
