export default class Airport {
  constructor(name, code) {
   // Constructor for the Airport class
    this._name = name;
    this._code = code;
  }

  toString() {
    return (`[object ${this._code}]`);
  }
}
