/**
 * @param  {mixed} args
 */

export class BaseRepository {
  constructor(args) {
    this.hash = { ...args };
  }
  /**
   * @param  {string} key
   * @param  {mixed} value
   * @return {mixed} BaseRepository;
   */
  add(key, value) {
    this.hash[key] = value;
    return this;
  }
  /**
   * @param  {string} key
   * @return {mixed} value
   */
  find(key) {
    return this.hash[key];
  }
  /**
   * @param  {string} key
   * @param  {mixed} value
   * @return {BaseRepository}
   */
  updateValue(key, value) {
    if (this.hash[key]) {
      this.hash[key] = value;
      return this;
    }
  }

  /**
   * @param  {string} key
   * @return {BaseRepository}
   */
  delete(key) {
    delete this.hash[key];
    return this;
  }
  /**
   * @return {Object} 
   */
  listAll() {
    return this.hash;
  }
  /**
   * @return {number}
   */
  getLength() {
    return Object.keys(this.hash).length;
  }
}
