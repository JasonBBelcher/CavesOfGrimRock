export class BaseRepository {
  constructor(args) {
    this.hash = { ...args };
  }

  add(key, value) {
    return (this.hash[key] = value);
  }

  find(key) {
    return this.hash[key];
  }

  updateValue(key, value) {
    if (this.hash[key]) {
      this.hash[key] = value;
      return this;
    }
    return undefined;
  }

  delete(key) {
    delete this.hash[key];
    return this;
  }

  listAll() {
    return this.hash;
  }

  getLength() {
    return Object.keys(this.hash).length;
  }
}
