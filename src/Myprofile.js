import React from 'react';
import { Card, Segment, Container, Image, Icon } from 'semantic-ui-react';
import guestavatar from './guestavatar.png';
import Projects from './Projects'
import { User, sampleUsers } from './UserClass.js'

class SampleUser{
  constructor(header, meta, description, bio, image){
    this.header = header;
    this.meta = meta;
    this.description = description;
    this.bio = bio;
    this.image = image;
  }
}

const sampleUser1 = new SampleUser('The New One', 'Programmer',
    'C/C++, Java, Javascript','I am a fledging programmer looking for more experience! I am currently' +
    ' studying at WSUV and cannot wait to get in to the software engineering industry.', guestavatar);

const MyProfileLayout = () => (
    <Container>
      <h1>{sampleUser1.header} <Icon position='right' size ='tiny' name='cog' link='edit'></Icon></h1>
      <Segment.Group horizontal>
        <Segment> <Image size ='small' spaced ='left' src={sampleUser1.image} /> </Segment>
        <Segment.Group vertical>
          <Segment> <p>Discipline:</p> {sampleUser1.meta} </Segment>
          <Segment> <p>Skills:</p> {sampleUser1.description} </Segment>
        </Segment.Group>
        <Segment> <p>Description:</p> {sampleUser1.bio} </Segment>
      </Segment.Group>
      <Segment.Group>
        <h4>Projects Currently Collaborating on</h4>
        <Projects/>
      </Segment.Group>
      <button>View Card</button>
    </Container>
)

export default MyProfileLayout;
