const tableFunction = require('./tableFunction');
/*
we would have wanted to either implement some sort of mock functions for the google 
API functions and or would have had some sort of software such as Angular or Puppeteer in order to have an easier way to implement testing functions for those things that we had other than the simple testing functions for correct inputs on login functions 
in the future we would have implemented our code in a manner using these so we would not have to restructure things later in order to have effective testing
*/ 

describe('table function (query facility data) suite', function () {
    test('test function calls', () => {
        const $ = require('jquery');
        const input = $('#myInput').value="PFR Station 20";
        const filter = input.value.toUpperCase();
        expect(tableFunction.filterFunction()).toBeDefined();
    });
});
