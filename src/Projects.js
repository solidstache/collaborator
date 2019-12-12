import React from 'react';
import { Card, Icon, Container } from 'semantic-ui-react';
import { Project, sampleProjects }  from './ProjectClass.js';
/*

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
/*
const items = [];
for(var i = 0; i < sampleProjects.length; i++ ) {
items.push({header: sampleProjects[i].projectName,
	   description: sampleProjects[i].description,
	   meta: sampleProjects[i].userName,
	   extra:  sampleProjects[i].likes + " likes",
	   href: ('#project' + i + ' url')});
}
*/
const ProjectGroupDisplay = () => <Card.Group items={ sampleProjects } />;
export default ProjectGroupDisplay;
