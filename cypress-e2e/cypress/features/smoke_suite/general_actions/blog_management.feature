Feature: Blog Management

    Scenario: Create blog
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user create new blog
        Then user check the blog creation

    Scenario: Create blog 2
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_2@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user create new blog
        Then user check the blog creation

    Scenario: Fail to create blog without title
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user create new blog without title
        Then user check the blog missing title validation

    Scenario: Edit personal blog
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user create a blog to edit it
        Then user edit the created blog

    Scenario: user blog edit limitation
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user check edit access on others blogs

    Scenario: user delete a blog belongs to him
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user delete a blog
        Then user check the delete validation

    Scenario: user delete a blog not belongs to him
        Given User navigates to public marketing page
        Then navigate to login page
        Then user enter email "user_1@zenhr.com"
        Then user enter password "password"
        Then user click login
        Then user click on blogs
        Then user cannot delete a blog not belongs to him

