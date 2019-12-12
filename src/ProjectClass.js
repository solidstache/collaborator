
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
<<<<<<< HEAD
	new Project("MyFirstProject", "User1", "This is sample project 1", "Design Phase", 5, ["User1"]),
	new Project("MyFirstProject", "User1", "This is sample project 2", "Requirements Phase", 3, ["User1", "User2"]),
	new Project("MyFirstProject", "User2", "This is sample project 3", "Design Phase", 12, ["User2"]),
	new Project("MyFirstProject", "User3", "This is sample project 4", "Implementation Phase", 55, ["User3"]),
	new Project("MyFirstProject", "User4", "This is sample project 5", "Design Phase", 42, ["User4"]),
	new Project("MyFirstProject", "User5", "This is sample project 6", "Testing Phase",1234, ["User5", "User4"])];
=======
	new Project("MyFirstProject", "User1", "This is sample project 1", "Design Phase", 5),
	new Project("MyFirstProject", "User2", "This is sample project 2", "Requirements Phase", 3),
	new Project("MyFirstProject", "User3", "This is sample project 3", "Design Phase", 12),
	new Project("MyFirstProject", "User4", "This is sample project 4", "Implementation Phase", 55),
	new Project("MyFirstProject", "User5", "This is sample project 5", "Design Phase", 42),
	new Project("MyFirstProject", "User6", "This is sample project 6", "Testing Phase",1234)];
>>>>>>> b254546fc78c425b735994e1581034a2c2d521aa
