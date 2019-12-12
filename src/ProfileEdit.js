import React, { Component } from 'react';
import { Popup, Segment, Container, Image, Icon, Card, Form } from 'semantic-ui-react';
import guestavatar from './guestavatar.png';
import Projects from './Projects';
import sampleUser1 from './SampleUser';


class ProfileEdit extends Component {
  constructor(props) {
    super (props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {header: '', discipline: '', skills: '', bio: '', submittedHeader: '', submittedDiscipline: '', submittedSkills: '', submittedBio: ''}

  handleChange = (e, { name, value }) => this.setState({ [name]:value });

  handleSubmit = () => {
    const { header, discipline, skills, bio } = this.state;

    this.setState({submittedHeader: header, submittedDiscipline: discipline, submittedSkills: skills, submittedBio: bio});
    sampleUser1.header = this.state.header.toString();
    sampleUser1.meta = this.state.discipline.toString();
    sampleUser1.description = this.state.skills.toString();
    sampleUser1.bio = this.state.bio.toString();

  }

  render() {
    const { header, discipline, skills, bio, submittedHeader, submittedDiscipline, submittedSkills, submittedBio } = this.state;
    return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Container>
              <h1>
                <Form.Input
                placeholder='Name'
                name='header'
                value={header}
                onChange={this.handleChange}
                />
              </h1>
              <Segment.Group horizontal>
                <Segment>
                  <Popup trigger={<Image size ='small' spaced ='left' src={sampleUser1.image} />} wide='very'>
                    <Popup.Content>
                      <h4>Card Preview</h4>
                      <Card
                          image={sampleUser1.image}
                          header={sampleUser1.header}
                          meta={sampleUser1.meta}
                          description={sampleUser1.description}
                      />
                    </Popup.Content>
                  </Popup>
                </Segment>
                <Segment.Group vertical>
                  <Segment>
                    <p>
                    <Form.Input
                      placeholder='Discipline'
                      name='discipline'
                      value={discipline}
                      onChange={this.handleChange}
                    />
                    </p>
                  </Segment>
                  <Segment>
                    <p>
                      <Form.Input
                      placeholder='Skills'
                      name='skills'
                      value={skills}
                      onChange={this.handleChange}
                      />
                    </p>
                  </Segment>
                </Segment.Group>
                <Segment>
                  <p>
                    <Form.Input
                        placeholder='Description'
                        name='bio'
                        value={bio}
                        onChange={this.handleChange}
                    />
                  </p>
                  <Form.Button content='Submit'  />
                  <Segment>{sampleUser1.header}</Segment>
                  <Segment>{sampleUser1.meta}</Segment>
                  <Segment>{sampleUser1.description}</Segment>
                  <Segment>{sampleUser1.bio}</Segment>
                </Segment>
              </Segment.Group>
              <Segment.Group>
                <h4>Projects Currently Collaborating on</h4>
                <Projects/>
              </Segment.Group>
            </Container>
          </Form>
        </div>

    )

  }
}

export default ProfileEdit;
