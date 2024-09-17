Feature: Authorization

      Scenario: Check management access after login
            Given User navigates to public marketing page
            Then user check the admin access with email "admin@zenhr.com" and password "password"

      Scenario: Verify member user cannot manage tags
            Given User navigates to public marketing page
            Then user check the member access with email "user_1@zenhr.com" and password "password"
