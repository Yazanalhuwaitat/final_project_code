import { DataTable, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginLocators from "../../e2e/locators/loginLocators";
import LoginModel from "../../e2e/model/loginModel";
import LoginPO from "../../e2e/pageobjects/loginPO";
import loginPO from "../../e2e/pageobjects/loginPO";



//**************************** Login / Authentication/ Authorization ******************************/

Given("navigate to login page", ()=>{
    loginPO.getInstance().loginpage()
})

Then("user enter email {string}", (email: string)=>{
    loginPO.getInstance().fillemail(email)
})

Then("user enter password {string}", (password: string)=>{
    loginPO.getInstance().fillpassword(password)
})

Then("user click login", ()=>{
    loginPO.getInstance().loginbutton()
})

Then("user check the success case", () => {
    LoginPO.getInstance().successLogin();
});

Then("user logged in as failed user", () => {
    LoginPO.getInstance().failLogin()
});


Then("user check the admin access", () => {
    LoginPO.getInstance().adminaccess()
});

Then("user check the member access", () => {
    LoginPO.getInstance().memberaccess()
});



//**************************** Blog management ******************************/

Then("user click on blogs", () => {
    LoginPO.getInstance().blogbutton()
});

Then("user create new blog", () => {
    LoginPO.getInstance().blogcreate()
});

Then("user check the blog creation", () => {
    LoginPO.getInstance().blogcreatesuccess()
});

Then("user create new blog without title", () => {
    LoginPO.getInstance().blogmissingtitle()
});

Then("user check the blog missing title validation", () => {
    LoginPO.getInstance().blogmissingtitlevalidation()
});

Then("user create a blog to edit it", () => {
    LoginPO.getInstance().createeditblog()
});

Then("user edit the created blog", () => {
    LoginPO.getInstance().editblog()
});

Then("user check edit access on others blogs", () => {
    LoginPO.getInstance().faileditblog()
});

Then("user delete a blog", () => {
    LoginPO.getInstance().destroyblog()
});

Then("user check the delete validation", () => {
    LoginPO.getInstance().destroyblogcheck()
});

Then("user cannot delete a blog not belongs to him", () => {
    LoginPO.getInstance().faildeleteblog()
});


// //**************************** Tag management ******************************/

// Then("user check the tag list with email {string} and password {string}", (email: string, password: string) => {
//     const loginData: LoginModel = {
//         email: email,
//         password: password
//     };
//     LoginPO.getInstance().userLogin(loginData);
//     LoginPO.getInstance().taglist();
// })

// Then("user check the tag creation with email {string} and password {string}", (email: string, password: string) => {
//     const loginData: LoginModel = {
//         email: email,
//         password: password
//     };
//     LoginPO.getInstance().userLogin(loginData);
//     LoginPO.getInstance().tagcreate();
// })

// Then("user check the tag creation duplicate with email {string} and password {string}", (email: string, password: string) => {
//     const loginData: LoginModel = {
//         email: email,
//         password: password
//     };
//     LoginPO.getInstance().userLogin(loginData);
//     LoginPO.getInstance().tagduplicate();
// })





