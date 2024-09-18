Feature: Authentication

    Scenario: Successful login
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "admin@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user check the success case

    Scenario: Failed login
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "admin@zenhr.com"
        Then user enter password "pasrthert"
        Then user click login
        Then user logged in as failed user
