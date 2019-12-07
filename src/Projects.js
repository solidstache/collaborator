import React from 'react';
import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Project 1',
    href:'',
    description:'This is sample project 1',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 2',
    href:'',
    description: 'This is sample project 2',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 3',
    href:'',
    description: 'This is sample project 3',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 4',
    href:'',
    description:'This is sample project 4',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 5',
    href:'',
    description: 'This is sample project 5',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 6',
    href:'',
    description: 'This is sample project 6',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 7',
    href:'',
    description:'This is sample project 7',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 8',
    href:'',
    description: 'This is sample project 8',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 9',
    href:'',
    description: 'This is sample project 9',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 10',
    href:'',
    description:'This is sample project 10',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 11',
    href:'',
    description: 'This is sample project 11',
    meta: 'This is a subtitle'
  },
  {
    header: 'Project 12',
    href:'',
    description: 'This is sample project 12',
    meta: 'This is a subtitle'
  },
]

const ProjectGroupDisplay = () => <Card.Group items={items} />

export default ProjectGroupDisplay;
