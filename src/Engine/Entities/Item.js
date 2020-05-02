/**
 * Item Entity
 */

export class Item {
  constructor(id, name, namePlural) {
    this.id = id;
    this.name = name;
    this.namePlural = namePlural;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setNamePlural(namePlural) {
    this.namePlural = namePlural;
    return this;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getNamePlural() {
    return this.namePlural;
  }
}
