Feature: Authorization

      Scenario: Check management access after login
            Given User navigates to public marketing page
            Then navigate to login page
            Then user enter email "admin@zenhr.com"
            Then user enter password "password"
            Then user click login
            Then user check the admin access
            
      Scenario: Verify member user cannot manage tags
            Given User navigates to public marketing page
            Then navigate to login page
            Then user enter email "user_1@zenhr.com"
            Then user enter password "password"
            Then user click login
            Then user check the member access