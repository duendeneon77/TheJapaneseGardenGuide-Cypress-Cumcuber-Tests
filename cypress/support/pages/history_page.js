export default{
    theHistoryPageWasEdited(){
    cy.contains('h1', "História",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-HISTORY-PAGE-TEST-TEXT" ).should('be.visible')
    },
    theHistoryPageWasNotEdited(){
    cy.contains('h1', "História",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-HISTORY-PAGE-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}