const findRoute = require('./findRoute');

describe('isValidZip suite', function () {
	test('test valid zip', () => {
		expect(findRoute.isValidZip('97203')).toBe(true);
	});

	test('test invalid: more than 5 numbers', () => {
		expect(findRoute.isValidZip('972034')).toBe(false);
	});

	test('test invalid: letters', () => {
		expect(findRoute.isValidZip('jimmy')).toBe(false);
	});

	test('test empty string', () => {
		expect(findRoute.isValidZip('')).toBe(false);
	});
});


// jest.mock('./index');
// test('check for valid zipcode', () => {

// 	const submitZip = index.submitZip;//require('./index');

// 	// Tell the fetchCurrentUser mock function to automatically invoke
// 	// its callback with some data
// 	submitZip.mockImplementation(cb => {
// 		cb({
// 			textValue: '12345'
// 		});
// 	});

// 	$("#submitZipButton").click();
// 	expect(submitZip).toBeCalled();

// });

