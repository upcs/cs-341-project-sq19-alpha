const tableFunction = require('./tableFunction');

describe('table function (query facility data) suite', function () {
    test('test function calls', () => {
        const $ = require('jquery');
        const input = $('#myInput').value="PFR Station 20";
        const filter = input.value.toUpperCase();
        expect(tableFunction.filterFunction()).toBeDefined();
    });
});