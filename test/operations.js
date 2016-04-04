'use strict';

const assert = require('chai').assert;

const operations = require('../src/operations');

describe('Operations tests', () => {
    it('should export getOp function', done => {
        assert.isOk(operations.getOp, 'getOp not exported');
        assert.equal(typeof operations.getOp, 'function', 'getOp is not a function');
        done();
    });
    it('should export + operation', done => {
        const plus = operations.getOp('+');
        assert.isOk(plus, '+ was not found');
        assert.equal(plus.type, 'binary', '+ should be binary');
        assert.equal(plus.operate(1, 2), 3, 'operate returning wrong result');
        assert.equal(plus.operate(10, 1), 11, 'operate returning wrong result');
        done();
    });
    it('should export − operation', done => {
        const minus = operations.getOp('−');
        assert.isOk(minus, '− was not found');
        assert.equal(minus.type, 'binary', '− should be binary');
        assert.equal(minus.operate(3, 1), 2, 'operate returning wrong result');
        assert.equal(minus.operate(5, 9), -4, 'operate returning wrong result');
        done();
    });
    it('should export × operation', done => {
        const times = operations.getOp('×');
        assert.isOk(times, '× was not found');
        assert.equal(times.type, 'binary', '× should be binary');
        assert.equal(times.operate(2, 3), 6, '× returning wrong result');
        assert.equal(times.operate(2, -4), -8, '× returning wrong result');
        assert.equal(times.operate(0.1, 4), 0.4, '× returning wrong result');
        done();
    });
    it('should export ÷ operation', done => {
        const divide = operations.getOp('÷');
        assert.isOk(divide, '÷ was not found');
        assert.equal(divide.type, 'binary', '÷ should be binary');
        assert.equal(divide.operate(4, 2), 2, '÷ returning wrong result');
        assert.equal(divide.operate(10, 20), 0.5, '÷ return wrong result');
        done();
    });
    it('should export % operation', done => {
        const percent = operations.getOp('%');
        assert.isOk(percent, '% was not found');
        assert.equal(percent.type, 'unary', '% should be unary');
        assert.equal(percent.operate(10), 0.1, '% returning wrong result');
        assert.equal(percent.operate(3), 0.03, '% returning wrong result');
        done();
    });
    it('should export ± operation', done => {
        const oposite = operations.getOp('±');
        assert.isOk(oposite, '± was not found');
        assert.equal(oposite.type, 'unary', '± should be unary');
        assert.equal(oposite.operate(2), -2, '± returning wrong value');
        assert.equal(oposite.operate(-4), 4, '± returning wrong value');
        done();
    });
});
