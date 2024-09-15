Feature: Tag Management

  Scenario: Verify listing of tags
    Given User navigates to public marketing page
    When user check the tag list

  Scenario: Verify tag creation
    Given User navigates to public marketing page
    When user check the tag creation

  Scenario: Verify duplicate tag creation failure
    Given User navigates to public marketing page
    When user check the tag creation duplicate
