'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum.js');
describe('# SUM', () => {
  // BDD
  it('Should SUM module to be a function', () => {
    expect(sum).to.be.a('function');  
  });

  it('Should SUM return 10 when I pass 1 and 9', () => {
    expect(sum(1,9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', () => {
    expect(sum(2,3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just one parameter', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(sum(3)).to.be.an('error');
  });

  it('Should SUM return an error ifthe parameter has not a number', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(sum('e','g')).to.be.an('error');
  });

  // TDD
  it('Assert', () => {
    var assert = require('assert');
    assert.equal(sum(20,30), 70, 'Deu merda pesoal');
  });
});