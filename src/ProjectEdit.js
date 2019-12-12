import React, {Component} from 'react';
import {Popup, Segment, Container, Image, Icon, Card, Form } from 'semantic-ui-react';
import sampleProjects from './ProjectClass';
import sampleUser1 from './SampleUser';

class ProjectEdit extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {name: '', description: ''}

  handleChange = (e, {name, value}) => this.setState({[name]: value });

  handleSubmit = () => {
    const {name, description } = this.state;

    this.setState({submittedName: name, submittedDescription: description});

  }

  render() {
    const {name, description, submittedName, submittedDescription } = this.state;
    return(
        <Container>
          <h1>
            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
          /></h1>
          <Segment.Group horizontal>
            <Segment>
              <Popup trigger={<Image size ='small' spaced ='left' src='https://react.semantic-ui.com/images/wireframe/image.png' />} wide='very'>
                <Popup.Content>
                  <h4>Card Preview</h4>
                    <Card
                      image=
                      header=
                      meta=
                      description=
                    />
                </Segment>
            <Segment.Group vertical>
              <Segment> <p>Type:</p> {sampleProject1.type}</Segment>
              <Segment> <p>Language: </p> {sampleProject1.language}</Segment>
            </Segment.Group>
            <Segment> <p>Description:</p> {sampleProject1.description}</Segment>
          </Segment.Group>
          <Segment.Group>
            <h4>Team Members</h4>
            <Card.Group items={sampleProject1.members} />
          </Segment.Group>
          <Segment.Group>
            <h4>Files</h4>
          </Segment.Group>
        </Container>
    )
  }
}
