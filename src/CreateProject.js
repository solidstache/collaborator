import React, {Component} from 'react';
import {Segment, Container, Image, Form } from 'semantic-ui-react';
import {sampleProjects, Project, collaborateProject} from './ProjectClass';
import sampleUser1 from './SampleUser';


class CreateProject extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {name: '', description: '', progress: '' }

  handleChange = (e, {name, value}) => this.setState({[name]: value});

  handleSubmit = () => {
    let payload;
    const {name, description, progress } = this.state;

    this.setState({submittedName: name, submittedDescription: description, submittedProgress: progress});
    payload = new Project(this.state.name.toString(), sampleUser1, this.state.description.toString(), this.state.progress.toString(), [sampleUser1], 0 );
    sampleProjects.push(payload);
    collaborateProject.push(payload);
  }

  render(){
    const {name, description, progress, submittedName, submittedDescription, submittedProgress} = this.state;
    return(
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Container>
              <Segment horizontal>
                  <Form.Group fluid>
                    <label attached='left'>Name of Project</label>
                    <Form.Input
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={this.handleChange}
                    />
                    <label attached='left'>Progress of Project</label>
                    <Form.Input
                      placeholder='Progress'
                      name='progress'
                      value={progress}
                      onChange={this.handleChange}
                    />
                    <label attached='left'> Description of Project</label>
                    <Form.Input
                      placeholder='Description'
                      name='description'
                      value={description}
                      onChange={this.handleChange}
                    />
                    <Form.Button content='Submit'/>
                  </Form.Group>
              </Segment>
            </Container>
          </Form>
        </div>
    )

  }
}

export default CreateProject;
