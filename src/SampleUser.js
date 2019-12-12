import guestavatar from './guestavatar.png';

class SampleUser{
  constructor(header, meta, description, bio, image){
    this.header = header;
    this.meta = meta;
    this.description = description;
    this.bio = bio;
    this.image = image;
  }
}

export const sampleUser1 = new SampleUser('The New One', 'Programmer',
    'C/C++, Java, Javascript','I am a fledging programmer looking for more experience! I am currently' +
    ' studying at WSUV and cannot wait to get in to the software engineering industry.', guestavatar);

export const sampleUser2 = new SampleUser('The Experienced One', 'Programmer', 'Java, Javascript, Ruby',
    'I have been working on various web projects and been wanting to mentor newer programmers.', guestavatar);

export const sampleUsers = [ sampleUser1, sampleUser2];

export default sampleUser1;
