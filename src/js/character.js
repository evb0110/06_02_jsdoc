/**
 * <Общее описание>
 * 
 * @param {string} name - character's name
 * @param {string} type - character's type
 * 
 * @throws Will throw an error if name.length < 2
 * @throws Will throw an error if name.length > 10
 * @throws Will throw an error if name isn't a string
 * @throws Will throw if type doesn't belong to a predefined array of types
 */ 
function Character(name, type) {
  this.name = name;
  this.type = type;
}