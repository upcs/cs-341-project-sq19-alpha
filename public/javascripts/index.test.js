//test function sum()
//has to match file name
const sum = require('./index.js');

describe('sum suite', function () {
	test('add 1+2 to equal 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});

	test('add 12+1 to equal 13', () => {
		expect(sum(12, 1)).toBe(13);
	});

	test('add 38+62 to equal 100', () => {
		expect(sum(38, 62)).toBe(100);
	});
});

//const goToHome = require('./index.js');
const $ = require('jquery');
jest.mock('./index');
test('check for valid username & password', () => {

	const goToHome = require('./index');

	// Tell the fetchCurrentUser mock function to automatically invoke
	// its callback with some data
	goToHome.mockImplementation(cb => {
		cb({
			usernameVal: 'g.gov',
			passwordVal: 'g.gov',
			testBool: true
		});
	});

	$("#loginButton").click();
	expect(goToHome).toBeCalled();

});



jest.mock('./index');
test('check for valid zipcode', () => {

	const submitZip = require('./index');

	// Tell the fetchCurrentUser mock function to automatically invoke
	// its callback with some data
	submitZip.mockImplementation(cb => {
		cb({
			textValue: '12345'
		});
	});

	$("#submitZipButton").click();
	expect(submitZip).toBeCalled();

});




