
const register = require('./register');

describe('isValidUsername suite', function () {
	test('test valid uname', () => {
		expect(register.isValidUsername('test@test.gov')).toBe(true);
	});

	test('test valid uname', () => {
		expect(register.isValidUsername('hi@h.gov')).toBe(true);
	});
    
    	test('test not a gov', () => {
		expect(register.isValidUsername('test@test.com')).toBe(false);
	});

	test('test no @ symbol', () => {
		expect(register.isValidUsername('testing')).toBe(false);
	});

	test('test nothing before the @ symbol', () => {
		expect(register.isValidUsername('@hi')).toBe(false);
	});
    
    	test('only @ and gov', () => {
		expect(register.isValidUsername('@gov')).toBe(false);
	});
    
        test('only @ and gov', () => {
		expect(register.isValidUsername('@.gov')).toBe(true);
	});
    
    	test('test empty string', () => {
		expect(register.isValidUsername('')).toBe(false);
	});
    
    	test('test contains symbols', () => {
		expect(register.isValidUsername('test!@test.gov')).toBe(false);
	});
    
    	test('test contains a space', () => {
		expect(register.isValidUsername('test!@ test.gov')).toBe(false);
	});
});


describe('isValidPassword suite', function () {
	test('test valid password', () => {
		expect(register.isValidPassword('password')).toBe(true);
	});

	test('test valid password with numbers', () => {
		expect(register.isValidPassword('password123')).toBe(true);
	});

	test('test password too short', () => {
		expect(register.isValidPassword('pass')).toBe(false);
	});

	test('test password too long', () => {
		expect(register.isValidPassword('passwordpassword')).toBe(false);
	});

       	test('test password with symbols', () => {
		expect(register.isValidPassword('password!')).toBe(false);
	});

    	test('test empty password', () => {
		expect(register.isValidPassword('')).toBe(false);
	});
    
    	test('test password with a space', () => {
		expect(register.isValidPassword('pass word')).toBe(false);
	});
    
});

describe('isValidRepPsw suite', function () {
        test('test valid password', () => {
	    expect(register.isValidPassword('password')).toBe(true);
	});

	test('test valid password with numbers', () => {
		expect(register.isValidPassword('password123')).toBe(true);
	});

	test('test password too short', () => {
		expect(register.isValidPassword('pass')).toBe(false);
	});

	test('test password too long', () => {
		expect(register.isValidPassword('passwordpassword')).toBe(false);
	});
    
       	test('test password with symbols', () => {
		expect(register.isValidPassword('password!')).toBe(false);
	});

    	test('test empty password', () => {
		expect(register.isValidPassword('')).toBe(false);
	});
    
    	test('test password with a space', () => {
		expect(register.isValidPassword('pass word')).toBe(false);
	});
});





