Prerequisites: Having node, cypress installed. Clone the repo 

1) Running the tests from terminal : 

all specs on chrome:

npx cypress run --spec .\cypress\e2e\imdb-e2e\* --browser chrome --headed(optional)

only first spec on firefox: 

npx cypress run --spec .\cypress\e2e\imdb-e2e\1-nick_cage_upcoming.cy.js --browser firefox --headed

2) Running tests from test runner

npx cypress open

UI test runner --> choose e2e testing --> browser --> click on the test spec you want to run

