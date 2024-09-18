import LoginLocators from "../locators/loginLocators";
import LoginModel from "../model/loginModel";

class loginPO {
    public static instance: loginPO;

    public static getInstance(): loginPO {
        if (this.instance == null) {
            this.instance = new loginPO();
        }
        return this.instance;
    }
    private constructor() { }


    //**************************** Login / Authentication/ Authorization ******************************/


    public loginpage(){
        cy.get(LoginLocators.LOGIN_BUTTON).click()
        cy.url().should('eq', 'http://localhost:3000/sessions/new');
    }

    public fillemail(email:string){
        cy.sendTextToElement(LoginLocators.EMAIL_FIELD, email);
    }


    public fillpassword(password:string){
        cy.sendTextToElement(LoginLocators.PASSWORD_FIELD,password);
    }

    public loginbutton(){
        cy.get(LoginLocators.LOGIN_SUBMIT).click();
        cy.wait(2000);
    }

    public successLogin() {
        cy.contains("Login Successful");
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    }

    public failLogin() {
        cy.contains("false");
        cy.url().should('eq', 'http://localhost:3000/sessions/new');
    }

    public adminaccess() {
        cy.get(LoginLocators.MANAGE_TAGS).should('be.visible');
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.visit("http://localhost:3000/tags");
        cy.contains("Funny");
    }

    public memberaccess() {
        cy.visit("http://localhost:3000/tags");
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.contains("Not Authorized");
    }


    //**************************** Tag management ******************************/
    public managetags() {
        cy.get(LoginLocators.MANAGE_TAGS).click();
        cy.url().should('eq', 'http://localhost:3000/tags');
    }
    
    public taglist() {
        cy.wait(2000);
        cy.contains("Funny").should('be.visible');
        cy.contains("Professional").should('be.visible');
    }

    public tagcreate() {
        cy.wait(2000);
        cy.get(LoginLocators.NEW_TAG).click();
        cy.get(LoginLocators.NAME_TAG).type('Test tag');  // The first time it will type "Test tag 1"
        cy.get(LoginLocators.SUBMIT_TAG).click();
    }

    public tagcreatecheck() {
        cy.contains("Tag was successfully created.").should('be.visible');
        cy.wait(1000)
        cy.get(LoginLocators.DELETE_TAG).click()
    }

    public tagduplicate() {
        cy.wait(2000);
        cy.get(LoginLocators.NEW_TAG).click();
        cy.get(LoginLocators.NAME_TAG).type("Funny");
        cy.get(LoginLocators.SUBMIT_TAG).click();
    }

    public tagduplicatevalidation() {
        cy.contains("Name has already been taken").should('be.visible');
    }


    //**************************** Blog management ******************************/
    
    public blogbutton(){
        cy.get(LoginLocators.BLOGS_DASHBOARD).click()
        cy.url().should('eq', 'http://localhost:3000/blogs');
    }
    
    public blogcreate(){
        cy.get(LoginLocators.NEW_BLOG).click();
        cy.get(LoginLocators.BLOG_TITLE).type("Yazan2k");
        cy.get(LoginLocators.BLOG_BODY).type("Test body");
        cy.get(LoginLocators.BLOG_CHECKBOX).click();
        cy.get(LoginLocators.SUBMIT_BLOG).click();
    }

    public blogcreatesuccess(){
        cy.contains("Blog was successfully created.")
    }
    
    public blogmissingtitle() {
        cy.get(LoginLocators.NEW_BLOG).click();
        cy.get(LoginLocators.BLOG_BODY).type("Yazan2k");
        cy.get(LoginLocators.SUBMIT_BLOG).click();
    }

    public blogmissingtitlevalidation(){
        cy.contains("Title can't be blank").should('be.visible');
    }
    
    public createeditblog(){
        cy.get(LoginLocators.NEW_BLOG).click();
        cy.get(LoginLocators.BLOG_TITLE).type("Test title");
        cy.get(LoginLocators.BLOG_BODY).type("Test body");
        cy.get(LoginLocators.BLOG_CHECKBOX1).click();
        cy.get(LoginLocators.SUBMIT_BLOG).click();
    }

    public editblog() {
        cy.get(LoginLocators.EDIT_BLOG).click()
        cy.get(LoginLocators.BLOG_TITLE).type("Test title edited");
        cy.get(LoginLocators.BLOG_BODY).type("Test body edited");
        cy.get(LoginLocators.BLOG_CHECKBOX).click();
        cy.get(LoginLocators.SUBMIT_BLOG).click();
        cy.wait(2000)
    }

    public faileditblog() {
        cy.get(LoginLocators.SHOW_BLOG_2).click();
        cy.get(LoginLocators.EDIT_BLOG).should('not.exist');
    }

    public destroyblog() {
        cy.get(LoginLocators.SHOW_BLOG).last().click();
        cy.get(LoginLocators.DELETE_BLOG).click();
        cy.wait(2000)
    }

    public destroyblogcheck() {
        cy.contains("Blog was successfully destroyed.")
    }

    public faildeleteblog() {
        cy.get(LoginLocators.SHOW_BLOG_2).click();
        cy.get(LoginLocators.DELETE_BLOG).should('not.exist');
    }

}
export default loginPO;
