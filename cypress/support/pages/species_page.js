
///<reference types ="cypress" />

export default{

    lookingForSpecieInTheList(specieName){
        cy.contains('.specieCard h2', specieName,{timeout:5000}).should('be.visible')
        cy.contains('.specieCard', specieName).contains('a', 'Ler mais').click()
    },
    
    specieIsNotInTheList(specieName){
            cy.contains('.specieCard h2', specieName,{timeout:5000}).should('not.exist')
        }

}