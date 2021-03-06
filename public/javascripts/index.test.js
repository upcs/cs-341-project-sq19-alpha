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
    
    	test('adds a negative correctly', () => {
		expect(index.sum(6, -3)).toBe(3);
	});
    
    	test('adds two negatives correctly', () => {
		expect(index.sum(-6, -3)).toBe(-9);
	});

    	test('adds a zero correctly', () => {
		expect(index.sum(6, 0)).toBe(6);
	});
});



