var Utils = function() {
};

Utils.prototype.printer = function(universe, gen) {
  process.stdout.write("\033[2J");
  var header = " Generation " + (gen++);
  var output = "";
  for (var column = 0; column < universe.size; column++) {
    output += "|"
    for (var row = 0; row < universe.size; row++) {
      output += universe.planets[column][row].toString();
    }
    output += "|\n";
  }
  console.log(header);
  console.log(output);

}

module.exports = Utils;
