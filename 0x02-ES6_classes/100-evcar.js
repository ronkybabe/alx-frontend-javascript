import Car from './10-car';

// Define a class for an Electric Vehicle (EV) Car that extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);
    this._range = range;
  }

  // Define a static getter for Symbol.species to specify the species constructor
  static get [Symbol.species]() {
    // In this case, we specify that the species constructor is the Car class
    return Car;
  }
}

