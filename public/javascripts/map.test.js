
// //TESTING FUNCTION FOR MAP.JS 




// We did not complete this test file. We wanted to test to make sure the
// addresses were working properly, the heat map was working properly, and
// that the data (Tier ones) load up completely.

// const setupGoogleMock = () => {
//     /*** Mock Google Maps JavaScript API ***/
//   const google = {
//     maps: {
//       places: {
//         AutocompleteService: () => {},
//         PlacesServiceStatus: {
//           INVALID_REQUEST: 'INVALID_REQUEST',
//           NOT_FOUND: 'NOT_FOUND',
//           OK: 'OK',
//           OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
//           REQUEST_DENIED: 'REQUEST_DENIED',
//           UNKNOWN_ERROR: 'UNKNOWN_ERROR',
//           ZERO_RESULTS: 'ZERO_RESULTS',
//         },
//       },
//     },
//     window.google = google;
// };
// }





const map = require('./map');

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


