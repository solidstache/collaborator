import React, {Component} from 'react';
import { Popup, Segment, Container, Image, Icon, Card } from 'semantic-ui-react';
import guestavatar from './guestavatar.png';
import Projects from './Projects';
import sampleUser1 from './SampleUser';
import pageState, {state, handleItemClick} from './Experiment';


const MyProfileLayout = () => (

    <Container>
      <h1>{sampleUser1.header}<Icon position='right' size ='tiny' name='cog' active={activeItem === 'edit'} link onClick={this.handleItemClick}  /></h1>
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
          <Segment> <p>Discipline:</p> {sampleUser1.meta} </Segment>
          <Segment> <p>Skills:</p> {sampleUser1.description} </Segment>
        </Segment.Group>
        <Segment> <p>Description:</p> {sampleUser1.bio} </Segment>
      </Segment.Group>
      <Segment.Group>
        <h4>Projects Currently Collaborating on</h4>
        <Projects/>
      </Segment.Group>
    </Container>
)

export default MyProfileLayout;
