# Code Coverage
[![codecov](https://codecov.io/gh/upcs/cs-341-project-sq19-alpha/branch/master/graph/badge.svg)](https://codecov.io/gh/upcs/cs-341-project-sq19-alpha)

# Travis CI
[![Build Status](https://travis-ci.org/upcs/cs-341-project-sq19-alpha.svg?branch=master)](https://travis-ci.org/upcs/cs-341-project-sq19-alpha)

Sprint1:
  - code coverage set up
  - multiple page navigation
  - basic layout for home, about, tier one, and find route pages
  - login page + username/passward primilinary checks
  - "government official" stats page initial set up (not secure yet)


21 FEB 2019- Story Acceptance Test:
As a consumer, after entering my address, I want to know my route is accurate from my Portland address to my nearest facility.

1) Verify that the address selected exists in the data base (given that the address is a valid Portland address)
2) Verify that the facility generated is the nearest facility to the address
3) Verify that the facility generated is always the same facility for the same input address
4) Verify that the search bar field is updated with the input address once an address is selected
5) Verify the info/error messages when an invalid address or an address outside of Portland is entered.

What are the variations to test?
- an invalid address is entered, resulting in an info/error message
- an address outside of the Portland area is entered, resulting in an info/error message

What can we automate?
- Give real "testing" data (give hardcoded valid/invalid addresses to test)
- Distance/boundary calculations
- Error messages