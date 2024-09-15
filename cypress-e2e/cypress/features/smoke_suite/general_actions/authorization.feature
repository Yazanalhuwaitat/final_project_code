Feature: Authorization

      Scenario: Check management access after login
            Given User navigates to public marketing page
            Then user check the admin access
            Then user check the success case

      Scenario: Verify member user cannot manage tags
            Given User navigates to public marketing page
            Then user check the member access