
export class Project {
	constructor(projectName, userName, description, progress, likes) {
	  this.projectName = projectName;
	  this.userName = userName;
	  this.description = description;
	  this.progress = progress;
	  this.likes = likes;
	}

}

export const sampleProjects = [
	new Project("MyFirstProject", "User1", "This is sample project 1", "Design Phase", 5),
	new Project("MyFirstProject", "User2", "This is sample project 2", "Requirements Phase", 3),
	new Project("MyFirstProject", "User3", "This is sample project 3", "Design Phase", 12),
	new Project("MyFirstProject", "User4", "This is sample project 4", "Implementation Phase", 55),
	new Project("MyFirstProject", "User5", "This is sample project 5", "Design Phase", 42),
	new Project("MyFirstProject", "User6", "This is sample project 6", "Testing Phase",1234)];
