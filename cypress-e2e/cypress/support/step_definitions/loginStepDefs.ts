import { DataTable, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginLocators from "../../e2e/locators/loginLocators";
import LoginModel from "../../e2e/model/loginModel";
import LoginPO from "../../e2e/pageobjects/loginPO";



//**************************** Login / Authentication/ Authorization ******************************/

Given("user logged in as automation user", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
});

Then("user check the success case", () => {
    LoginPO.getInstance().successLogin
});

Then("user logged in as failed user", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "pasrthert"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().failLogin()
});

Then("user check the admin access", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().adminaccess();
})

Then("user check the member access", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().memberaccess();
})



//**************************** Tag management ******************************/

Then("user check the tag list", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().taglist();
})

Then("user check the tag creation", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().tagcreate();
})

Then("user check the tag creation duplicate", () => {
    const loginData: LoginModel = {
        email: "admin@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().tagduplicate();
})



//**************************** Blog management ******************************/

Then("user create a new blog", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogcreate();
})

Then("user 2 create a new blog", () => {
    const loginData: LoginModel = {
        email: "user_2@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogcreate1();
})

Then("user create a new blog without body", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().blogmissingtitle();
})

Then("user edit a blog", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().editblog();
})

Then("user cannot edit a blog not belongs to him", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().faileditblog();
})

Then("user delete the last blog", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().destroyblog();
})

Then("user cannot delete a blog not belongs to him", () => {
    const loginData: LoginModel = {
        email: "user_1@zenhr.com",
        password: "password"
    };
    LoginPO.getInstance().userLogin(loginData);
    LoginPO.getInstance().faildeleteblog();

})
