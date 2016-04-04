const $ = require('jquery');
const calcBrain = require('./calculatorBrain');

const calculatorCtrl = (function () {
    'use strict';

    let userIsInTheMiddleOfTyping = false;

    function setDisplayTo (val) {
        console.log('setting display to', val);
        $('#main').html(val);
    }

    function getCurrentDisplayedValue () {
        return parseFloat($('#main').html());
    }

    $('.button').click(function () {
        const op = $(this).html();

        console.log(op);

        if (/^[0-9]{1}$/.test(parseInt(op))) {
            if (userIsInTheMiddleOfTyping) {
                setDisplayTo('' + $('#main').html() + op);
            }
            else {
                setDisplayTo(op);
                userIsInTheMiddleOfTyping = true;
            }
        }

        if (op === 'AC') {
            userIsInTheMiddleOfTyping = false;
            setDisplayTo(0);
            calcBrain.clear();
            return;
        }

        if (op === '=') {
            userIsInTheMiddleOfTyping = false;
            const curValue = getCurrentDisplayedValue();
            const result = calcBrain.addOperandOrOperation(curValue);
            setDisplayTo(result);
            return;
        }

        if (/^M/.test(op)) {
            // todo: Memory operations;
            userIsInTheMiddleOfTyping = false;
            return;
        }

        if (/^[+−×÷]$/.test(op)) {
            const result = calcBrain.addOperandOrOperation(getCurrentDisplayedValue());
            calcBrain.addOperandOrOperation(op);
            userIsInTheMiddleOfTyping = false;
            if (result) {
                setDisplayTo(result);
            }
            return;
        }

        if (/[%±]/.test(op)) {
            const result = calcBrain.addOperandOrOperation(op);
            userIsInTheMiddleOfTyping = false;
            if (result) {
                setDisplayTo(result);
            }
            return;
        }

        if (op === '.') {
            if (!userIsInTheMiddleOfTyping) {
                setDisplayTo('0.');
                userIsInTheMiddleOfTyping = true;
                return;
            }
            if (!/\./.test(getCurrentDisplayedValue().toString())) {
                setDisplayTo('' + getCurrentDisplayedValue() + '.');
                return;
            }
            return;
        }
    });
})();

module.exports = calculatorCtrl;
