export default {
    checkArticleTitle(articleTitle) {
        cy.contains('h1', articleTitle, { timeout: 5000 }).should('be.visible')
    },
    checkArticleImage(articleImage) {
         cy.get('.articleImage').should('have.attr', 'alt', articleImage).should('be.visible')
    },
    checkArticleP(paragraph){
        cy.contains("p", paragraph).should('be.visible')
    }
}