var assert = require("chai").assert;
var Universe = require("../app/universe");
var Planet = require("../app/planet");

describe("Universe", function() {
  var universeForTest;

  before(function() {
    universeForTest = new Universe(10);
  });

  it("creating valid instances", function() {
    assert.isNotNull(universeForTest);
    assert.instanceOf(universeForTest, Universe);
  });

  it("universe planets should be array", function() {
    assert.isArray(universeForTest.planets);
  });

  it("universe has planets", function() {
    universeForTest.planets.forEach(function(location) {
      location.forEach(function(planet) {
        assert.instanceOf(planet, Planet);
      });
    });
  });

  describe("Universe 3x3", function() {

    before(function() {
      universeForTest = new Universe(3);
    });

    it("universe size should be equal to 3", function() {
      assert.equal(universeForTest.size, 3);
    });

  });

});
