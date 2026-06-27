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
    },
    goToAddVideo(){
        cy.contains('button', 'Postar Vídeo').click()
    },
    goToEditOrDeleteVideo(){
        cy.contains('button', 'Editar/Deletar Vídeo').click()
    },
    goToEditHistoryPage(){
        cy.contains('button', 'Editar Página "História"').click()
    },
    goToHistoryPage(){
    cy.contains('button', 'Índice').click()
    cy.contains('button', "História",{timeout:5000}).click()
    },
    goToEditProjectPage(){
        cy.contains('button', 'Editar Página "Projeto"').click()
    },
    goToProjectPage(){
    cy.contains('button', 'Sobre').click()
    cy.contains('button', "Projeto",{timeout:5000}).click()
    },
    goToEditWaterSession(){
        cy.contains('button', 'Editar sessão "Água"').click()
    },
    goToWaterSessionPage(){
        cy.contains('button', 'Índice').click()
        cy.contains('button', 'Mais',{timeout:5000}).click()
        cy.contains('h3', 'A presença da Água no Jardim japonês').click()
    },
    goToEditToroSession(){
        cy.contains('button', 'Editar sessão "Torô"').click()
    },
    goToToroSessionPage(){
        cy.contains('button', 'Índice').click()
        cy.contains('button', 'Mais',{timeout:5000}).click()
        cy.contains('h3', 'Torô, a luminária de pedra').click()
    },
    goToEditRocksSession(){
        cy.contains('button', 'Editar sessão "Pedras"').click()
    },
    goToRocksSessionPage(){
        cy.contains('button', 'Índice').click()
        cy.contains('button', 'Mais',{timeout:5000}).click()
        cy.contains('h3', 'A importância das Pedras').click()
    }

}