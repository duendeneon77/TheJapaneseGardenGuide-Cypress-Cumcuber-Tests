export default{
    theProjectPageWasEdited(){
    cy.contains('h1', "Sobre o projeto",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-PROJECT-PAGE-TEST-TEXT" ).should('be.visible')
    },
    theProjectPageWasNotEdited(){
    cy.contains('h1', "Sobre o projeto",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-PROJECT-PAGE-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}