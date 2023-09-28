export default class HolbertonClass {
  constructor(size, location) {
    // constructor for Holbertonclass
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    // Define a custom behavior for type coercion
    if (hint === 'number') {
      return (this._size);
    }
    if (hint === 'string') {
      return (this._location);
    }
    return this;
  }
}
