//test function sum()
//has to match file name
const index = require('./index');

describe('sum suite', function () {
	test('add 1+2 to equal 3', () => {
		expect(index.sum(1, 2)).toBe(3);
	});

	test('add 12+1 to equal 13', () => {
		expect(index.sum(12, 1)).toBe(13);
	});

	test('add 38+62 to equal 100', () => {
		expect(index.sum(38, 62)).toBe(100);
	});
});

describe('isValidUnamePass suite', function () {
	test('test valid uname & pass', () => {
		expect(index.isValidUnamePass('g.gov', 'g.gov')).toBe(true);
	});

	test('test invalid pass', () => {
		expect(index.isValidUnamePass('g.gov', 'abc')).toBe(false);
	});

	test('test invalid uname', () => {
		expect(index.isValidUnamePass('jimmy', 'cole.gov')).toBe(false);
	});

	test('test empty strings', () => {
		expect(index.isValidUnamePass('', '')).toBe(false);
	});
});

describe('isValidZip suite', function () {
	test('test valid zip', () => {
		expect(index.isValidZip('97203')).toBe(true);
	});

	test('test invalid: more than 5 numbers', () => {
		expect(index.isValidZip('972034')).toBe(false);
	});

	test('test invalid: letters', () => {
		expect(index.isValidZip('jimmy')).toBe(false);
	});

	test('test empty string', () => {
		expect(index.isValidZip('')).toBe(false);
	});
});



/*
//const goToHome = require('./index.js');
const $ = require('jquery');
jest.mock('./index');
test('check for valid username & password', () => {

	const goToHome = index.goToHome;

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

	const submitZip = index.submitZip;//require('./index');

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




*/