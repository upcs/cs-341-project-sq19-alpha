/*testing that goes towards code coverage
other things that effect the code coverage are our google APIs which 
should not be taken into account when looking at this. 
The following will test the correct type of input on the login page


Tried to do mocking for buttons to make sure that the UI was behaving correctly 
*/ 




const login = require('./login');

describe('isValidUnamePass suite', function () {
	test('test valid username & password', () => {
		expect(login.isValidUnamePass('test@test.gov', 'tester')).toBe(true);
	});

    	test('test valid username & password', () => {
		expect(login.isValidUnamePass('test@.gov', 'tester')).toBe(true);
	});

    	test('test valid username & password', () => {
		expect(login.isValidUnamePass('test.gov', 'tester')).toBe(true);
	});

    	test('test valid username & password', () => {
		expect(login.isValidUnamePass('test@gov', 'tester')).toBe(true);
	});

    	test('test valid username & password', () => {
		expect(login.isValidUnamePass('testgov', 'tester')).toBe(true);
	});

	test('test password too short', () => {
		expect(login.isValidUnamePass('test@test.gov', 'hey')).toBe(false);
	});

    	test('test password too long', () => {
		expect(login.isValidUnamePass('test@test.gov', 'heyheyheyheyheyhey')).toBe(false);
	});

	test('test invalid username', () => {
		expect(login.isValidUnamePass('jimmy', 'cole.gov')).toBe(false);
	});

	test('test empty strings', () => {
		expect(login.isValidUnamePass('', '')).toBe(false);
	});
    
    	test('Just empty password', () => {
		expect(login.isValidUnamePass('test@test.gov', '')).toBe(false);
	});
    
    	test('Just empty username', () => {
	    expect(login.isValidUnamePass('', 'tester')).toBe(false);    
	});

    	test('Symbols in username', () => {
		expect(login.isValidUnamePass('tester!@test.gov', 'tester')).toBe(false);
	});

    	test('Symbols in the password', () => {
		expect(login.isValidUnamePass('tester@test.gov', 'te$ter')).toBe(false);
	});

    	test('Space in the password', () => {
		expect(login.isValidUnamePass('tester@test.gov', 'te ster')).toBe(false);
	});
    
    	test('Space before the password', () => {
		expect(login.isValidUnamePass('tester@test.gov', ' tester')).toBe(false);
	});
    
    	test('Space after the password', () => {
		expect(login.isValidUnamePass('tester@test.gov', 'tester ')).toBe(false);
	});

    	test('Space in the username', () => {
		expect(login.isValidUnamePass('tester @test.gov', 'te ster')).toBe(false);
	});
    
    	test('Space before the username', () => {
		expect(login.isValidUnamePass(' tester@test.gov', 'tester')).toBe(false);
	});
    
    	test('Space after the username', () => {
		expect(login.isValidUnamePass('tester@test.gov ', 'tester')).toBe(false);
	});

    
    	test('@ in the password', () => {
		expect(login.isValidUnamePass('tester@test.gov', 'te@ster')).toBe(false);
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


