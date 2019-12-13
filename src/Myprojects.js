import React from 'react';
import { Card, Segment, Container, Image, Icon } from 'semantic-ui-react';
import guestavatar from './guestavatar.png';

class SampleProject{
  constructor(name, type, members, language, description, files ){
    this.name = name;
    this.type = type;
    this.members = members;
    this.language = language;
    this.description = description;
    this.files = files;
  }
}
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
    ' studying at WSUV and cannot wait to get in to the software engineering industry. ', guestavatar);

const sampleUser2 = new SampleUser('The Experienced One', 'Programmer', 'Java, Javascript, Ruby',
    'I have been working on various web projects and been wanting to mentor newer programmers.', guestavatar);

const sampleProject1 = new SampleProject('First Project', 'Windows Utility Program',
    [sampleUser1, sampleUser2], 'Java',
    'I am currently working on a file organizer for a small project. ' +
    'This is mainly for practice. If interested please feel free to apply!',[]);

const myProjectLayout = () => (
    <Container>
      <h1>The First Project <Icon position='right' size ='tiny' name='cog' link='edit'></Icon></h1>
      <Segment.Group horizontal>
        <Segment> <Image size='small' spaced='left' src='https://react.semantic-ui.com/images/wireframe/image.png' /> </Segment>
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

export default myProjectLayout;
