var Planet = function(state) {

  /* attributes */
  this.state = state && true || false;
  this.hasNeighbors = 0;

};

Planet.prototype.toString = function() {
  return this.state ? "*" : " ";
}

module.exports = Planet;
