Feature: Authentication

    Scenario: Successful login
        Given User navigates to public marketing page
        When user logged in as automation user with email "admin@zenhr.com" and password "password"
        Then user check the success case

    Scenario: Failed login
        Given User navigates to public marketing page
        When user logged in as failed user with email "admin@zenhr.com" and password "pasrthert"

