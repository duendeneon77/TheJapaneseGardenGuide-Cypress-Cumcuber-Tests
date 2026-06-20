
//trasformar gherkin em metodos
///<reference types ="cypress" />

import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

Given("I am on login screen", ()=>{
    home_page.accessLogin()

})

Given("I fill password {string}",(password)=>{
    login_page.fillPasswordInput(password)
})
Given('I fill e-mail {string}',(email)=>{
    login_page.fillEmailInput(email)
})
Given('I fill my credentials correctly {string} {string}', (email, password)=>{
    login_page.fillCredentials(email,password)
})

When("I click on Login", ()=>{

    login_page.doLogin()
    
    
})
Then("I see the login message {string}", (message)=>{
     login_page.checkLoginErrorMessage(message)
    
})
Then("I see the text {string}", (text)=>{
     login_page.successLoginText(text)
    
})