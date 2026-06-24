
/// <reference types="cypress" />

    export default{
    theVideoExistsInTheVideoPage(){
    cy.contains('h2', "Video Test",{timeout:5000}).should('be.visible')
    },
    checkVideoDetails(){
        cy.get('.videoDiv iframe',{timeout:5000})
    .invoke('attr', 'src')
    .then((src) => {
        const videoId = src
            .split('/embed/')[1]
            .split('?')[0]
        expect(videoId).to.match(/^[a-zA-Z0-9_-]{11}$/)
    })

    cy.contains('p', "video description test, video description text").should('be.visible')
    },
    theVideoDoesNotExistInTheVideoPage(){
        cy.contains('h2', "Video Test",{timeout:5000}).should('not.exist')
    }
}