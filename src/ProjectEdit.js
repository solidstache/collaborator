import React, {Component} from 'react';
import {Popup, Segment, Container, Image, Icon, Card, Form } from 'semantic-ui-react';
import { Project, sampleProjects }  from './ProjectClass.js';
import sampleUser1 from './SampleUser';
import sampleUsers from './SampleUser';

class ProjectEdit extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {name: '', description: '', progress: ''}

  handleChange = (e, {name, value}) => this.setState({[name]: value });

  handleSubmit = () => {
    const {name, description, progress } = this.state;

    this.setState({submittedName: name, submittedDescription: description, submittedProgress: progress});
    sampleProjects[0].projectName = this.state.name.toString();
    sampleProjects[0].progress = this.state.progress.toString();
    sampleProjects[0].description = this.state.description.toString();
  }

  render() {
    const {name, description, progress, submittedName, submittedDescription, submittedProgress } = this.state;
    return(
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Container>
              <h1>
                <Form.Input
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                />
              </h1>
              <Segment.Group horizontal>
                <Segment>
                  <Popup trigger={<Image size ='small' spaced ='left' src='https://react.semantic-ui.com/images/wireframe/image.png' />} wide='very'>
                    <Popup.Content>
                      <h4>Card Preview</h4>
                      <Card
                        image='https://react.semantic-ui.com/images/wireframe/image.png'
                        header={sampleProjects[0].projectName}
                        meta={sampleUser1.header}
                        description={sampleProjects[0].description}
                      />
                    </Popup.Content>
                  </Popup>
                </Segment>
                <Segment.Group vertical>
                  <Segment>
                    <p>
                      <Form.Input
                        placeholder='Progress'
                        name='progress'
                        value={progress}
                        onChange={this.handleChange}
                      />
                    </p>
                  </Segment>
                  <Segment><p>Owner:{sampleUser1.header}</p></Segment>
                </Segment.Group>
                <Segment>
                  <p>
                    <Form.Input
                      placeholder='Description'
                      name='description'
                      value={description}
                      onChange={this.handleChange}
                      />
                  </p>
                  <Form.Button content='Submit'/>
                </Segment>
              </Segment.Group>
              <Segment.Group>
                <Segment><p>Name:</p>{sampleProjects[0].projectName}</Segment>
                <Segment><p>Progress:</p>{sampleProjects[0].progress}</Segment>
                <Segment><p>Description:</p>{sampleProjects[0].description}</Segment>
              </Segment.Group>
              <Segment.Group>
                <h4>Team Members</h4>
                <Card.Group items={sampleProjects[0].members} />
              </Segment.Group>
            </Container>
          </Form>
        </div>
    )
  }
}

export default ProjectEdit;
