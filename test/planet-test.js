var assert = require("chai").assert;
var Planet = require("../app/planet");

describe("Planet", function() {
  var planetForTest;

  it("creating valid instances", function() {
    planetForTest = new Planet(true);
    assert.isNotNull(planetForTest);
    assert.instanceOf(planetForTest, Planet);
  });

  describe("Falsy planet", function() {
    before(function() {
      planetForTest = new Planet(false);
    });

    it("should return a planet with state false", function() {
      assert.equal(planetForTest.state, false);
    });

    it("returns space string", function() {
      assert.equal(planetForTest.toString(), " ");
    });
  });

  describe("Truthy planet", function() {
    before(function() {
      planetForTest = new Planet(true);
    });

    it("should return a planet with state true", function() {
      assert.equal(planetForTest.state, true);
    });

    it("returns X string", function() {
      assert.equal(planetForTest.toString(), "X");
    });
  });

});
