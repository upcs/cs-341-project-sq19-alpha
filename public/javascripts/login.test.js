const login = require('./login');

describe('isValidUnamePass suite', function () {
	test('test valid uname & pass', () => {
		expect(login.isValidUnamePass('test@test.gov', 'tester')).toBe(true);
	});

	test('test invalid pass', () => {
		expect(login.isValidUnamePass('fail.gov', '123')).toBe(false);
	});

	test('test invalid uname', () => {
		expect(login.isValidUnamePass('jimmy', 'cole.gov')).toBe(false);
	});

	test('test empty strings', () => {
		expect(login.isValidUnamePass('', '')).toBe(false);
	});
});

/*

const $ = require('jquery');
jest.mock('./login');
test('check button click', () => {

	const goToHome = login.goToHome;

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

});*/
