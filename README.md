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

Sprint2:
	- Data from Tier One Database displayed in table
	- Enhanced About page and Extra Info page
	- Revamped website aesthetic (major CSs improvements)
	- Organization of files
	- Fix ignore git
	- Passing tests for login username and password (check against regex)

Sprint3:
Major Accomplishments/Improvements:
	- Solidifying the VISION
	- Data base table querying (search and filter)
	- Export and print funciontality
	- Google Maps API familiarity and Markers
	- Markers on map
	- UI improvements: consistency, intiutive, all major elements present
	
*The following were completed for Sprint 4 with the additional feature of a heatmap
Sprint 4 Deliverables:
Team Alpha plans to finalize our project, the Portland Post-Disaster Prep, by completing the following:
1)	Solve firewall rule/port issues and get GCP running
2)	Solve “limit on markers” issue and figure out how to display all facilities as markers
3)	Make markers clickable (to display basic info including facility name and address)
4)	Routing: MAIN FEATURE
5)	Create all needed databases (for markers, login, and facility info)
6)	Login feature
7)	TESTING



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
