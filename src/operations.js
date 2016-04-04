const operations = (function () {
    'use strict';

    const ops = {
        '+': {
            type: 'binary',
            operate: (a, b) => a + b
        },
        '−': {
            type: 'binary',
            operate: (a, b) => a - b
        },
        '×': {
            type: 'binary',
            operate: (a, b) => a * b
        },
        '÷': {
            type: 'binary',
            operate: (a, b) => a / b
        },
        '±': {
            type: 'unary',
            operate: input => -input
        },
        '%': {
            type: 'unary',
            operate: input => input / 100
        }
    };

    function getOp (opString) {
        return ops[opString];
    }

    return {
        getOp
    }
})();

module.exports = operations;
