// //TESTING FUNCTION FOR MAP.JS 

/*
we would have wanted to either implement some sort of mock functions for the google 
API functions and or would have had some sort of software such as Angular or Puppeteer in order to have an easier way to implement testing functions for those things that we had other than the simple testing functions for correct inputs on login functions 
in the future we would have implemented our code in a manner using these so we would not have to restructure things later in order to have effective testing
*/ 




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




/*
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

    
