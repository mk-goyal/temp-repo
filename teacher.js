import Person from '../Javascript/person';// we have used default keyword in person module for Person class,so there is no need to use curly braces

export class Teacher extends Person {
	constructor(name, degree) {
		super(name);
		this.degre = degree;
	}
	teach() {
		console.log('teach');
	}
}
