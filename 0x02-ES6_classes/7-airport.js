export default class Airport {
  constructor(name, code) {
   // Constructor for the Airport class
    this._name = name;
    this._code = code;
  }

  toString() {
   // Override the default to String() method to return a customized string
    return (`[object ${this._code}]`);
  }
}
