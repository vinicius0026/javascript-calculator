import $ from 'jquery';
import calculatorCtrl from './calculatorCtrl';

$(document).ready(function () {

    $('.button').on('mousedown', function () {
        $(this).css('background-color', '#028090');
    });
    $(document).on('mouseup', function () {
        $('.button').css('background-color', '#05668D');
    });
});
