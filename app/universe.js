var Planet = require("./planet");
var God = require("./god");

var Universe = function(size) {

  /* attributes */
  this.size = size;
  this.planets = (function() {
    var planetsGrid = new Array(size);

    for (var column = 0; column < size; column++) {
      planetsGrid[column] = new Array(size);
      for (var row = 0; row < size; row++) {
        planetsGrid[column][row] = Math.random() > 0.5 ? new Planet(true) : new Planet(false);
      }
    }

    return planetsGrid;
  })();

};

Universe.prototype.countNeighbors = function() {
  for (var column = 0; column < this.size; column++) {
    for (var row = 0; row < this.size; row++) {

      var planet = this.planets[column][row];

      planet.hasNeighbors = 0;

      for(var columnCoord=-1; columnCoord <= 1; columnCoord++) {
        for(var rowCoord=-1; rowCoord <=1; rowCoord++) {
          var columnLoc = column + columnCoord;
          var rowLoc = row + rowCoord;
          if( !((columnCoord == 0 && rowCoord == 0) || columnLoc < 0 || rowLoc < 0 || columnLoc >= this.size || rowLoc >= this.size) ) {
            if(this.planets[columnLoc][rowLoc].state) {
              planet.hasNeighbors++;
            }
          }
        }
      }

    }
  }
}

Universe.prototype.nextGen = function() {
  var god = new God();

  for (var column = 0; column < this.size; column++) {
    for (var row = 0; row < this.size; row++) {

      var planet = this.planets[column][row];
      planet.state = god.applyRules(planet);
    }
  }

}

module.exports = Universe;
