///<reference types="cypress"/>

export default{

    adminPageTitleIsVisible(){
        cy.contains("h2", "O que deseja fazer?").should('be.visible')
    },
    goToEditDeleteSpeciePage(){
        cy.contains("button", "Editar/Excluir Espécie").click()
    },
    goToAddSpeciePage(){
        cy.contains("button", "Cadastrar Espécie").click()
    },
    goToEditOrDeleteArticle(){
        cy.contains("button", "Editar/Excluir Artigo").click()
    },
    goToPublishArticle(){
        cy.contains("button", "Publicar Artigo").click()
    }

}