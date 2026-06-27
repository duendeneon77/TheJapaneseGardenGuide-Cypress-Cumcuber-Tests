export default{
    theToroSessionWasEdited(){
    cy.contains('h1', "Torô, a luminária de pedra",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-TORO-SESSION-TEST-TEXT" ).should('be.visible')

    },
    theToroSessionWasNotEdited(){
    cy.contains('h1',"Torô, a luminária de pedra",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-TORO-SESSION-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}