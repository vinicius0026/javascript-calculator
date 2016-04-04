'use strict';

const assert = require('chai').assert;
const calcBrain = require('../src/calculatorBrain');

describe('calculator brain tests', () => {
    beforeEach(done => {
        calcBrain.clear();
        done();
    });

    it('should export a addOperandOrOperation function', done => {
        assert.isOk(calcBrain.addOperandOrOperation, 'Didnt export addOperandOrOperation function');
        assert.equal(typeof calcBrain.addOperandOrOperation, 'function', 'addOperandOrOperation is not a function');
        done();
    });

    it('should perform addition', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const secondInsertion = calcBrain.addOperandOrOperation('+');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.equal(result, 8, 'Wrong calculation');
        done();
    });

    it('should perform subtraction', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const secondInsertion = calcBrain.addOperandOrOperation('−');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.equal(result, 2, 'Wrong calculation');
        done();
    });

    it('should perform multiplication', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const secondInsertion = calcBrain.addOperandOrOperation('×');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.equal(result, 15, 'Wrong calculation');
        done();
    });

    it('should perform division', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const secondInsertion = calcBrain.addOperandOrOperation('÷');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.equal(result, 5/3, 'Wrong calculation');
        done();
    });

    it('should perform percentage', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const result = calcBrain.addOperandOrOperation('%');
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.equal(result, 5/100, 'Wrong calculation');
        done();
    });

    it('should invert sign', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(5);
        const result = calcBrain.addOperandOrOperation('±');
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.equal(result, -5, 'Wrong calculation');
        done();
    });

    it('should ignore first input if it is not a number', done => {
        const firstInsertion = calcBrain.addOperandOrOperation('÷');
        const secondInsertion = calcBrain.addOperandOrOperation(3);
        const thirdInsertion = calcBrain.addOperandOrOperation('+');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.isUndefined(thirdInsertion, 'Unexpected output');
        assert.equal(result, 6, 'Wrong calculation');
        done();
    });

    it('should ignore first input if second input is a number', done => {
        const firstInsertion = calcBrain.addOperandOrOperation(9);
        const secondInsertion = calcBrain.addOperandOrOperation(3);
        const thirdInsertion = calcBrain.addOperandOrOperation('+');
        const result = calcBrain.addOperandOrOperation(3);
        assert.isUndefined(firstInsertion, 'Unexpected output');
        assert.isUndefined(secondInsertion, 'Unexpected output');
        assert.isUndefined(thirdInsertion, 'Unexpected output');
        assert.equal(result, 6, 'Wrong calculation');
        done();
    });

    it('should be able to make several operations sequentially', done => {
        calcBrain.addOperandOrOperation(2);
        calcBrain.addOperandOrOperation('+');
        const result1 = calcBrain.addOperandOrOperation(4);
        calcBrain.addOperandOrOperation('−');
        const result2 = calcBrain.addOperandOrOperation(1);
        calcBrain.addOperandOrOperation('×');
        const result3 = calcBrain.addOperandOrOperation(7);
        calcBrain.addOperandOrOperation('÷');
        const result4 = calcBrain.addOperandOrOperation(10);
        assert.equal(result1, 6, 'Wrong calculation');
        assert.equal(result2, 5, 'Wrong calculation');
        assert.equal(result3, 35, 'Wrong calculation');
        assert.equal(result4, 3.5, 'Wrong calculation');
        done();
    });

    it('should throw exception if second input is an unsupported operation', done => {
        calcBrain.addOperandOrOperation(2);
        assert.throws(() => calcBrain.addOperandOrOperation('#'), /unsupported operation/);
        done();
    });
});
