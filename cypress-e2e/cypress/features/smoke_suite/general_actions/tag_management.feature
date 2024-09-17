Feature: Tag Management

  Scenario: Verify listing of tags
    Given User navigates to public marketing page
    When user check the tag list with email "admin@zenhr.com" and password "password"

  Scenario: Verify tag creation
    Given User navigates to public marketing page
    When user check the tag creation with email "admin@zenhr.com" and password "password"

  Scenario: Verify duplicate tag creation failure
    Given User navigates to public marketing page
    When user check the tag creation duplicate with email "admin@zenhr.com" and password "password"
