
export class Project {
	constructor(projectName, userName, description, progress, likes, members) {
	  this.projectName = projectName;
	  this.userName = userName;
	  this.description = description;
	  this.progress = progress;
	  this.likes = likes;
	  this.members = members;
	}

}

export const sampleProjects = [
	new Project("MyFirstProject", "User1", "This is sample project 1", "Design Phase", 5, ["User1"]),
	new Project("MyFirstProject", "User1", "This is sample project 2", "Requirements Phase", 3, ["User1", "User2"]),
	new Project("MyFirstProject", "User2", "This is sample project 3", "Design Phase", 12, ["User2"]),
	new Project("MyFirstProject", "User3", "This is sample project 4", "Implementation Phase", 55, ["User3"]),
	new Project("MyFirstProject", "User4", "This is sample project 5", "Design Phase", 42, ["User4"]),
	new Project("MyFirstProject", "User5", "This is sample project 7", "Testing Phase",1234, ["User5", "User4"]),
	new Project("MyFirstProject", "User1", "This is sample project 8", "Design Phase", 5, ["User1"]),
	new Project("MyFirstProject", "User2", "This is sample project 9", "Requirements Phase", 3, ["User2"]),
	new Project("MyFirstProject", "User3", "This is sample project 10", "Design Phase", 12, ["User3"]),
	new Project("MyFirstProject", "User4", "This is sample project 11", "Implementation Phase", 55, ["User4"]),
	new Project("MyFirstProject", "User5", "This is sample project 12", "Design Phase", 42, ["User5"]),
	new Project("MyFirstProject", "User6", "This is sample project 13", "Testing Phase",1234, ["User6"] )
];

