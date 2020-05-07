/**
 * Item Entity
 */

export class Item {
  constructor(uid, type, id, name, namePlural, attributeEffect) {
    this.uid = uid;
    this.type = type;
    this.id = id;
    this.name = name;
    this.namePlural = namePlural;
    this.attributeEffect = attributeEffect;
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

  getAttributeName() {
    return this.attributeEffect.attribute;
  }

  getAttributeValue() {
    return this.attributeEffect.value;
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
