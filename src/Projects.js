import React from 'react';
import { Card } from 'semantic-ui-react';
import { sampleProjects }  from './ProjectClass.js';

const ProjectGroupDisplay = () => <Card.Group items={ sampleProjects } />;
export default ProjectGroupDisplay;
