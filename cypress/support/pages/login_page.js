
///<reference types ="cypress" />

export default{
    doLogin(){
        cy.contains("button", "Entrar").click()
    },

    checkLoginErrorMessage(message){
        cy.contains("p",message,{ timeout: 5000 }).should('be.visible')
    },
    fillPasswordInput(password){
        cy.get("#inputSenha").type(password)
    },
    fillEmailInput(email){
        cy.get("#inputEmail").type(email)
    },
    fillCredentials(email, password){
        cy.get("#inputEmail").type(email)
        cy.get("#inputSenha").type(password)
        
    },
    successLoginText(text){
        cy.contains("h2", text, {timeout: 5000}).should('be.visible')
    },
    fillFieldsAndClickToLogin(email,password){
        this.fillCredentials(email,password)
        this.doLogin()
    }
}

