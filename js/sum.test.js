const sum = require('./sum');

test('add 1+2 to equal 3', () => {
	expect(sum(1,2)).toBe(3);
});


test('add 12+34 to equal 13', () => {
	expect(sum(12,34)).toBe(13);
});

test('add 38+62 to equal 100', () => {
	expect(sum(38,62)).toBe(100);
});



