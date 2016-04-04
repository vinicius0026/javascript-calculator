const operations = require('./operations');

const calculatorBrain = (function () {
    'use strict';

    let currentOperation = [];

    return {
        addOperandOrOperation: function (op) {
            if (typeof op === 'number' && currentOperation.length <= 1 ) {
                currentOperation = [op];
                return;
            }

            if (typeof op === 'string' && currentOperation.length === 0) {
                return;
            }

            if (typeof op === 'string' && currentOperation.length === 1) {
                const operation = operations.getOp(op);
                if (!operation) {
                    throw new Error('unsupported operation');
                }

                if (operation.type === 'unary') {
                    const result = operation.operate(currentOperation[0]);
                    currentOperation = [result];
                    return result;
                }

                currentOperation.push(op);
                return;
            }

            if (typeof op === 'number' && currentOperation.length === 2) {
                const operation = operations.getOp(currentOperation[1]);
                const a = currentOperation[0];
                const b = op;
                const result = operation.operate(a, b);
                currentOperation = [result];
                return result;
            }

            throw new Error('calculator in undefined state');
        },
        clear: function () {
            currentOperation = [];
        }
    }
})();

module.exports = calculatorBrain;
