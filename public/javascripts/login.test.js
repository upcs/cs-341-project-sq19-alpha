/*testing that goes towards code coverage
other things that effect the code coverage are our google APIs which 
should not be taken into account when looking at this. 
The following will test the correct type of input on the login page


Tried to do mocking for buttons to make sure that the UI was behaving correctly 
*/ 




const login = require('./login');

describe('isValidUnamePass suite', function () {
	test('test valid uname & pass', () => {
		expect(login.isValidUnamePass('g.gov', 'g.gov')).toBe(true);
	});

	test('test invalid pass', () => {
		expect(login.isValidUnamePass('g.gov', 'abc')).toBe(false);
	});

	test('test invalid uname', () => {
		expect(login.isValidUnamePass('jimmy', 'cole.gov')).toBe(false);
	});

	test('test empty strings', () => {
		expect(login.isValidUnamePass('', '')).toBe(false);
	});

});

describe('alertHi (callback function) suite', function () {
	test('test for return', () => {
		//const alertHi = jest.fn();
		//drinkAll(drink, 'lemon');
		//expect(drink).toHaveBeenCalled();
		expect(login.alertHi(true)).toBeDefined();
	});
});

/*

	// test("returns undefined by default", () => {

 // 		const mock = jest.fn();

	// 	expect(mock.isValidUnamePass).toHaveBeenCalled();
	// 	//expect(login.isValidUnamePass).toHaveBeenCalledTimes(1);
	// 	//expect(login.isValidUnamePass).toHaveBeenCalledWith(login.goToHome);
	// });

});


