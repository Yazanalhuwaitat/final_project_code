Feature: Marketing Welcome page

  Scenario: Visiting Welcome Page
    When User navigates to public marketing page
    Then I should see welcome message
    Then user logged in as automation user


  
