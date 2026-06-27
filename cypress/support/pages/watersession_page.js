export default{
    theWaterSessionWasEdited(){
    cy.contains('h1', "A importância da água no jardim japonês",{timeout:5000}).should('be.visible')
    cy.get('img[src*="testimage.png"]').should('be.visible')
    cy.contains("p","EDIT-WATER-SESSION-TEST-TEXT" ).should('be.visible')

    },
    theWaterSessionWasNotEdited(){
    cy.contains('h1', "A importância da água no jardim japonês",{timeout:5000}).should('be.visible')
    cy.get('img[src*="testimage.png"]').should('not.exist')
    cy.contains("p","EDIT-WATER-SESSION-TEST-TEXT" ).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a','Menu de Administrador').click()
    }
}