import React from 'react';
import { Card } from 'semantic-ui-react';
import { sampleUsers } from './UserClass.js'

const items = [];
for(let i = 0; i < sampleUsers.length; i++ ) {
items.push({header: sampleUsers[i].userName,
	   href: ('#user' + i + 's url'),
	   description: sampleUsers[i].description,
	   meta: sampleUsers[i].discipline
	   })
}
const UserCardList = () => <Card.Group items={items} />

export default UserCardList;
