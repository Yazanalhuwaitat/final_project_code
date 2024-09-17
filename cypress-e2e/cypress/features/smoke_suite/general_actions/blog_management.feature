Feature: Blog Management

    Scenario: Create blog
        Given User navigates to public marketing page
        When user create a new blog with email "user_1@zenhr.com" and password "password"


    Scenario: Create blog 2
        Given User navigates to public marketing page
        Then user 2 create a new blog with email "user_2@zenhr.com" and password "password"


    Scenario: Fail to create blog without title
        Given User navigates to public marketing page
        When user create a new blog without body with email "user_1@zenhr.com" and password "password"


    Scenario: Edit personal blog
        Given User navigates to public marketing page
        When user edit a blog with email "user_1@zenhr.com" and password "password"

    Scenario: user blog edit limitation
        Given User navigates to public marketing page
        Then user cannot edit a blog not belongs to him with email "user_1@zenhr.com" and password "password"

    Scenario: user delete
        Given User navigates to public marketing page
        Then user delete the last blog with email "user_1@zenhr.com" and password "password"


    Scenario: user blog edit limitation
        Given User navigates to public marketing page
        Then user cannot delete a blog not belongs to him with email "user_1@zenhr.com" and password "password"