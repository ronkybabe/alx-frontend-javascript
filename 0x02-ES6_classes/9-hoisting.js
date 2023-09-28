// Define a class to represent a Holberton class
export class HolbertonClass {
  constructor(year, location) {
    // Constructor for the HolbertonClass
    this._year = year;
    this._location = location;
  }

  // Getter method to retrieve the year
  get year() {
    return this._year;
  }

  // Getter method to retrieve the location
  get location() {
    return this._location;
  }
}

// Create instances of HolbertonClass for different years
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define a class to represent a Holberton student
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    // Constructor for the StudentHolberton class
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter method to retrieve the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter method to retrieve the Holberton class information of the student
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter method to retrieve a full student description
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students
const listOfStudents = [student1, student2, student3, student4, student5];

// Export the list of students as the default export
export default listOfStudents;

