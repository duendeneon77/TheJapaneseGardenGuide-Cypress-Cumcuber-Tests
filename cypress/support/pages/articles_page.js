
///<reference types="cypress"/>


export default{
    goToAdminMenu(){
        cy.get("#adminLink").click()
    },
    goToArticlePage(article){
        cy.contains('.card', article).within(() => {
        cy.contains('a', 'Ler mais').click()
        })
    },
    articleShallNotExist(article){
        cy.contains('.card h2', article).should('not.exist')
    },
    
    
}
