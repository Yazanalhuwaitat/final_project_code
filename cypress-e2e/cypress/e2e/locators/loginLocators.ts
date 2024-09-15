enum LoginLocators{

    //**************************** Login pages locators ******************************/
    LOGIN_BUTTON = "[data-e2e='login_button']",
    HOME_BUTTON = "[data-e2e='home_button']",
    EMAIL_FIELD = "[data-e2e='email_field']",
    PASSWORD_FIELD = "[data-e2e='password_field']",
    LOGIN_SUBMIT = "[data-e2e='login_submit']",
    LOGOUT_SUBMIT = "[data-e2e='logout_button']",


    //**************************** Dashboard page locators ******************************/
    MANAGE_TAGS = "[data-e2e='manage_tags_button']",
    BLOG_BUTTON = "[data-e2e='blogs_button_main']",


    //**************************** Tags management locators ******************************/
    NEW_TAG="[data-e2e='new_tag']",
    NAME_TAG="[data-e2e='name-field']",
    SUBMIT_TAG="[data-e2e='submit-button']",
    DELETE_TAG="[data-e2e='delete_tag']",
    TAGS_HEADER="[data-e2e='tags-header']",
    NEW_BLOG="[data-e2e='new_blog']",


    //**************************** Blogs management locators ******************************/
    BLOG_TITLE="[data-e2e='blog_title']",
    BLOG_BODY="[data-e2e='blog_body']",
    BLOG_CHECKBOX="[data-e2e='blog_tag_checkbox_1']",
    BLOG_CHECKBOX1="[data-e2e='blog_tag_checkbox_2']",
    SUBMIT_BLOG="[data-e2e='submit_button']",
    SHOW_BLOG="[data-e2e^='show-blog-']",
    SHOW_BLOG_2="[data-e2e='show-blog-69']",
    EDIT_BLOG="[data-e2e='edit_blog']",
    DELETE_BLOG="[data-e2e='delete_blog']",

}
export default LoginLocators