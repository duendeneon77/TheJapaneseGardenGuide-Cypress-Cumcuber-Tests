articles_page.js

///<reference types="cypress"/>


export default{
    goToAdminMenu(){
        cy.get("#adminLink").click()
    }
}
