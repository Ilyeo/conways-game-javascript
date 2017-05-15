var Planet = require("./planet");
var God = require("./god");

var Universe = function(columns, rows) {

  /* attributes */
  this.columns = columns;
  this.rows = rows;
  this.planets = (function() {
    var planetsGrid = new Array(columns);

    for (var column = 0; column < columns; column++) {
      planetsGrid[column] = new Array(rows);
      for (var row = 0; row < rows; row++) {
        planetsGrid[column][row] = Math.random() > 0.5 ? new Planet(true) : new Planet(false);
      }
    }

    return planetsGrid;
  })();

};

Universe.prototype.countNeighbors = function() {
  for (var column = 0; column < this.columns; column++) {
    for (var row = 0; row < this.rows; row++) {

      var planet = this.planets[column][row];

      planet.hasNeighbors = 0;

      for(var columnCoord=-1; columnCoord <= 1; columnCoord++) {
        for(var rowCoord=-1; rowCoord <=1; rowCoord++) {
          var columnLoc = column + columnCoord;
          var rowLoc = row + rowCoord;
          if( !((columnCoord == 0 && rowCoord == 0) || columnLoc < 0 || rowLoc < 0 || columnLoc >= this.columns || rowLoc >= this.rows) ) {
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

  for (var column = 0; column < this.columns; column++) {
    for (var row = 0; row < this.rows; row++) {

      var planet = this.planets[column][row];
      planet.state = god.applyRules(planet);
    }
  }

}

module.exports = Universe;
