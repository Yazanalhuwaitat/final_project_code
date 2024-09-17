import { DataTable, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginLocators from "../../e2e/locators/loginLocators";
import LoginModel from "../../e2e/model/loginModel";
import LoginPO from "../../e2e/pageobjects/loginPO";



//**************************** Login / Authentication/ Authorization ******************************/

Given("user logged in as automation user with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
});

Then("user check the success case", () => {
    LoginPO.getInstance().successLogin();
});

Then("user logged in as failed user with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().failLogin()
});

Then("user check the admin access with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().adminaccess();
})

Then("user check the member access with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().memberaccess();
})



//**************************** Tag management ******************************/

Then("user check the tag list with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().taglist();
})

Then("user check the tag creation with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().tagcreate();
})

Then("user check the tag creation duplicate with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().tagduplicate();
})



//**************************** Blog management ******************************/

Then("user create a new blog with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogcreate();
})

Then("user 2 create a new blog with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogcreate1();
})

Then("user create a new blog without body with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogmissingtitle();
})

Then("user edit a blog with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().editblog();
})

Then("user cannot edit a blog not belongs to him with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().faileditblog();
})

Then("user delete the last blog with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().destroyblog();
})

Then("user cannot delete a blog not belongs to him with email {string} and password {string}", (email: string, password: string) => {
    const loginData: LoginModel = {
        email: email,
        password: password
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().faildeleteblog();

})
