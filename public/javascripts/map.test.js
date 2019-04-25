//TESTING FUNCTION FOR MAP.JS 


// We did not complete this test file. We wanted to test to make sure the
// addresses were working properly, the heat map was working properly, and
// that the data (Tier ones) load up completely.

const setupGoogleMock = () => {
    /*** Mock Google Maps JavaScript API ***/
  const google = {
    maps: {
      places: {
        AutocompleteService: () => {},
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
    };
      global.window.google = google;
};
