/**
 * Character is a construction function
 *
 * @param {string} name - character's name
 * @param {string} type - character's type
 *
 * @throws Will throw if name isn't a string
 * @throws Will throw an error if name.length < 2
 * @throws Will throw an error if name.length > 10
 */
function Character(name, type) {
  if (typeof name !== 'string') throw new Error('name should be a string');
  if (name.length < 2 || name.length > 10) throw new Error('name has wrong length');
  this.name = name;
  this.type = type;
}

export default Character;
