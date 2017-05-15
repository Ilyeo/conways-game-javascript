var assert = require("chai").assert;
var God = require("../app/god");
var Planet = require("../app/planet");

describe("God", function() {

  var godForTest;

  before(function() {
    godForTest = new God();
  });

  describe("Underpopulation", function() {
    var planetUnderpopulated;

    before(function() {
      planetUnderpopulated = new Planet(true);
      planetUnderpopulated.hasNeighbors = 1;
    });

    it("Planet should be dead", function() {
      assert.equal(godForTest.applyRules(planetUnderpopulated), false);
    });
  });

  describe("Overpopulation", function() {
    var planetOverpopulated;

    before(function() {
      planetOverpopulated = new Planet(true);
      planetOverpopulated.hasNeighbors = 4;
    });

    it("Planet should be dead", function() {
      assert.equal(godForTest.applyRules(planetOverpopulated), false);
    });
  });

  describe("Unchanged", function() {
    var planetUnchanged;

    before(function() {
      planetUnchanged = new Planet(true);
      planetUnchanged.hasNeighbors = 2;
    });

    it("Planet should be on next generation", function() {
      assert.equal(godForTest.applyRules(planetUnchanged), true);
    });
  });

  describe("Come to life", function() {
    var planetComeToLife;

    before(function() {
      planetComeToLife = new Planet(false);
      planetComeToLife.hasNeighbors = 3;
    });

    it("Planet should be alive", function() {
      assert.equal(godForTest.applyRules(planetComeToLife), true);
    });
  });

});
