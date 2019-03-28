window.$ = window.jQuery = require('jquery');

const register = require('./register');

describe('isValidUsername suite', function () {
	test('test valid uname', () => {
		expect(register.isValidUsername('g.gov')).toBe(true);
	});

	test('test valid uname', () => {
		expect(register.isValidUsername('asdf.gov')).toBe(true);
	});

	test('test valid uname', () => {
		expect(register.isValidUsername('asd')).toBe(false);
	});

	test('test valid uname', () => {
		expect(register.isValidUsername('123')).toBe(false);
	});
});


describe('isValidPassword suite', function () {
	test('test valid password', () => {
		expect(register.isValidPassword('asdfgh')).toBe(true);
	});

	test('test valid password', () => {
		expect(register.isValidPassword('asd123')).toBe(true);
	});

	test('test valid password', () => {
		expect(register.isValidPassword('asd')).toBe(false);
	});

	test('test valid password', () => {
		expect(register.isValidPassword('123')).toBe(false);
	});
});

describe('isValidRepPsw suite', function () {
	test('test valid password', () => {
		expect(register.isValidRepPsw('asdfg', 'asdfg')).toBe(true);
	});

	test('test valid password', () => {
		expect(register.isValidRepPsw('asd123', 'asd123')).toBe(true);
	});

	test('test valid password', () => {
		expect(register.isValidRepPsw('asddf', '12345')).toBe(false);
	});

	test('test valid password', () => {
		expect(register.isValidRepPsw('123asd', 'asd123')).toBe(false);
	});
});





