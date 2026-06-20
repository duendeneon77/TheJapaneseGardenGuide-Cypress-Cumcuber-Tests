///<reference types="cypress"/>

export default{

    viewSpecieDetails(specieName,scientificName){
    cy.contains('h1', specieName).should('be.visible')
    cy.get(`img[alt="${specieName}"]`).should('be.visible')
    cy.contains('tr', 'Tipo:').should('contain.text', 'Conifera')
    cy.contains('tr', 'Cor:').should('contain.text', 'cores frias')
    cy.contains('tr', 'Crescimento:').should('contain.text', 'lento')
    cy.contains('tr', 'Tamanho:').should('contain.text', 'grande')
    cy.get('.cientName').should('be.visible').and('contain.text', scientificName)
    cy.get('.cientName').should('contain.text', scientificName)
    cy.get('.galeryImg').should('be.visible')
    cy.get('.galeryImg').should('have.length', 2)
    },
    viewEditedSpecieDetails(editedSpecieName,editedScientificName){
    cy.contains('h1', editedSpecieName,{timeout:5000}).should('be.visible')
    cy.get(`img[alt="${editedSpecieName}"]`,{timeout:5000}).should('be.visible')
    cy.contains('tr', 'Tipo:').should('contain.text', 'Caducifolia')
    cy.contains('tr', 'Cor:').should('contain.text', 'branca')
    cy.contains('tr', 'Crescimento:').should('contain.text', 'rapido')
    cy.contains('tr', 'Tamanho:').should('contain.text', 'pequeno')
    cy.get('.cientName').should('be.visible').and('contain.text', editedScientificName)
    cy.get('.specieParagraph').first().should('contain.text', "Edited Text Here")
    cy.get('.galeryImg').should('be.visible')
    cy.get('.galeryImg').should('have.length', 3)
    },
    returnToAdminPage(){
        cy.get("#adminLink").click()
    },

}