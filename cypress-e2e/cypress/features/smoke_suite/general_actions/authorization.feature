Feature: Authorization

      Scenario: Check management access after login
            Given User navigates to public marketing page
            Then navigate to login page
            Then user enter email "admin@zenhr.com"
            Then user enter password "password"
            Then user click login
            Then user check the admin access

      # Then user check the admin access with email "admin@zenhr.com" and password "password"



      Scenario: Verify member user cannot manage tags
            Given User navigates to public marketing page
            Then navigate to login page
            Then user enter email "user_1@zenhr.com"
            Then user enter password "password"
            Then user click login
            Then user check the member access



# Then user check the member access with email "user_1@zenhr.com" and password "password"