var Universe = require("./universe");
var Utils = require("./utils");

/*
  Blinker pattern
*/
// var conway = new Universe(3);
// conway.planets[0][1].state = true;
// conway.planets[1][1].state = true;
// conway.planets[2][1].state = true;

var conway = new Universe(45);

var utils = new Utils();

var gen = 0;
var interval = setInterval(function() {
  utils.printer(conway, gen);
  conway.countNeighbors();
  conway.nextGen();
  gen++;
}, 200);
