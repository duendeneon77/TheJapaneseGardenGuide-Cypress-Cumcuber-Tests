export default{
    theBridgesSessionWasEdited(){
    cy.contains('h1', "A simbologia das pontes no Jardim Japonês",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-BRIDGES-SESSION-TEST-TEXT" ).should('be.visible')

    },
    theBridgesSessionWasNotEdited(){
    cy.contains('h1',"A simbologia das pontes no Jardim Japonês",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-BRIDGES-SESSION-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}