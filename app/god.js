var God = function() {
  /* attributes */
};

God.prototype.applyRules = function(planet) {

  if(planet.state) {

    if(planet.hasNeighbors < 2 || planet.hasNeighbors > 3) {
      planet.state = false;
    } else if(planet.hasNeighbors === 2 || planet.hasNeighbors === 3) {
      planet.state = true;
    }

  } else {

    if(planet.hasNeighbors === 3) {
      planet.state = true;
    }

  }

  return planet.state;
}

module.exports = God;
