
/// <reference types="cypress" />

    export default{
    theVideoExistsInTheVideoPage(videoName){
    cy.contains('h2', videoName,{timeout:10000}).should('be.visible')
    },
    checkVideoDetails(videoDesctiption){
        cy.get('.videoDiv iframe',{timeout:10000})
    .invoke('attr', 'src')
    .then((src) => {
        const videoId = src
            .split('/embed/')[1]
            .split('?')[0]
        expect(videoId).to.match(/^[a-zA-Z0-9_-]{11}$/)
    })

    cy.contains('p', videoDesctiption).should('be.visible')
    },
    theVideoDoesNotExistInTheVideoPage(videoName){

        cy.log(videoName)

        cy.contains('h2', videoName,{timeout:10000}).should('not.exist')
    },
    goToAdminPage(){
        cy.contains('a', 'Menu de Administrador').click()
    }
}