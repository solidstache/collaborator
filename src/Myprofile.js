import React from 'react';
import { Card, Segment, Container, Image, Icon } from 'semantic-ui-react';
import guestavatar from './guestavatar.png';
import Projects from './Projects';

class SampleUser{
  constructor(name, discipline, skills, description){
    this.name = name;
    this.discipline = discipline;
    this.skills = skills;
    this.description = description;
  }
}

const sampleUser1 = new SampleUser('The New One', 'Programmer',
    'C/C++, Java, Javascript','I am a fledging programmer looking for more experience! I am currently' +
    ' studying at WSUV and cannot wait to get in to the software engineering industry. ');

const user =[
  {
    header: '{sampleUser1.name}',
    href:'#user23s url',
    description: '{sampleUser1.skills}',
    meta: '{sampleUser1.discipline}',
    image: guestavatar
  }
]

const MyProfileLayout = () => (
    <Container>
      <h1>{sampleUser1.name} <Icon position='right' size ='tiny' name='cog' link='edit'></Icon></h1>
      <Segment.Group horizontal>
        <Segment> <Image size ='small' spaced ='left' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /> </Segment>
        <Segment.Group vertical>
          <Segment> <p>Discipline:</p> {sampleUser1.discipline} </Segment>
          <Segment> <p> Skills:</p> {sampleUser1.skills} </Segment>
        </Segment.Group>
        <Segment raised='true'> <p>Description:</p> {sampleUser1.description} </Segment>
      </Segment.Group>
      <Segment.Group>
        <h4>Projects Currently Collaborating on</h4>
        <Projects/>
      </Segment.Group>
      <button>View Card</button>
    </Container>
)

export default MyProfileLayout;
