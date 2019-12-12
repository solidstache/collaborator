import React from 'react';
import { Card } from 'semantic-ui-react';
import guestavatar from './guestavatar.png'
import { User, sampleUsers } from './UserClass.js'
/*
 *
const items = [
  {
    header: 'User 1',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 2',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 3',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 4',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 5',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 6',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 7',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 8',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 9',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 10',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 11',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 12',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 13',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 14',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 15',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 16',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 17',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 18',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 19',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 20',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 21',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {

    header: 'User 22',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 23',
    href:'#user23s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
  {
    header: 'User 24',
    href:'#user24s url',
    description:'This is the list of skills or description of user 1',
    meta: 'This is a subtitle',
    image: guestavatar
  },
]
*/
const items = [];
for(var i = 0; i < sampleUsers.length; i++ ) {
items.push({header: sampleUsers[i].userName,
	   href: ('#user' + i + 's url'),
	   description: sampleUsers[i].description,
	   meta: sampleUsers[i].discipline
	   })
}
const UserCardList = () => <Card.Group items={items} />

export default UserCardList;
