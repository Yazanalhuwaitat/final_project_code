Feature: Tag Management

  Scenario: Verify listing of tags
    Given User navigates to public marketing page
    Then navigate to login page
    Then user enter email "admin@zenhr.com"
    Then user enter password "password"
    Then user click login
    Then user click on manage tags
    Then user check the tag list

  Scenario: Verify tag creation
    Given User navigates to public marketing page
    Then navigate to login page
    Then user enter email "admin@zenhr.com"
    Then user enter password "password"
    Then user click login
    Then user click on manage tags
    Then user create a new tag
    Then user check the tag creation and delete it

  Scenario: Verify duplicate tag creation failure
    Given User navigates to public marketing page
    Then navigate to login page
    Then user enter email "admin@zenhr.com"
    Then user enter password "password"
    Then user click login
    Then user click on manage tags
    Then user enter name not valid for the tag
    Then user check the tag duplicate validation
