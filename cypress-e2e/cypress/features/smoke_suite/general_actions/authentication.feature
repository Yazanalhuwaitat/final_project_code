Feature: Authentication

    Scenario: Successful login
        Given User navigates to public marketing page
        When user logged in as automation user
        Then user check the success case

    Scenario: Failed login
        Given User navigates to public marketing page
        When user logged in as failed user

