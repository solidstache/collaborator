export class User {
	constructor(userName, password, skills, discipline, description, projects) {	
		this.userName = userName;
		this.password = password;
		this.skills = skills;
		this.discipline = discipline;
		this.description = description;
		this.projects = projects;
	}

	addProject(project) {
		this.projects.push(project);
	}
}

export const sampleUsers = [ 
	new User("User1", "Password", "C, Java", "Programmer", "My description", []),
	new User("User2", "Password2", "C#", "Beginner Programmer", "Description", []),
	new User("User3", "Password3", "C", "Programmer", "Description about me", []),
	new User("User4", "Password4", "none", "Beginner Programmer", "Just looking at things", []),
	new User("User5", "Password5", "Python, C", "Programmer", "Looking for something to work on over the summer", []),
	new User("User6", "Password6", "MATLAB", "Engineer", "Interested in the software side too", []),
	new User("User7", "Password7", "HTML, Javascript, CSS", "Web Programmer", "I enjoy building websites", [])];

