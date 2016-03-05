var expect = require("chai").expect;
var rgb = require(__dirname + "/index");

describe("rgb", function(){
  it("correctly converts hex string", function() {
    expect(rgb("#FAFAFA")).to.eql({r: 250, g: 250, b: 250});
  });
});
