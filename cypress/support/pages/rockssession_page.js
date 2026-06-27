export default{
    theRocksSessionWasEdited(){
    cy.contains('h1', "A importancia das pedras no Jardim Japonês",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-ROCKS-SESSION-TEST-TEXT" ).should('be.visible')

    },
    theRocksSessionWasNotEdited(){
    cy.contains('h1',"A importancia das pedras no Jardim Japonês",{timeout:5000}).should('be.visible')
    cy.contains("p","EDIT-ROCKS-SESSION-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}