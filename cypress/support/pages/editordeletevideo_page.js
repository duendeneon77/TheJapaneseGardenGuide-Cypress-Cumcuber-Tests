export default {

    lookForVideo(){ 
        cy.get("#searchVideo").type('Video Test')
        cy.get(".searchItem",{timeout:5000}).click()
    },

    editVideoInformation(){

        cy.get('input[placeholder="Título do vídeo"]',{timeout:5000}).clear()
        cy.get('input[placeholder="Título do vídeo"]').type("Edited Video")

        cy.get('#videoText').clear()
        cy.get('#videoText').type('edited video description')

        cy.get('input[placeholder="Código do vídeo"]').clear()
        cy.get('input[placeholder="Código do vídeo"]').type(
            'https://www.youtube.com/embed/LOIUNVfKHTE?si=4dbXQPk17pWdlve7'
        )
    },

    clickToSaveVideoEdition(){
        cy.contains('button', 'Salvar').click()
    },

    handleEditOrDeleteVideoMessage(message){
        cy.get('#articleModalBox',{timeout:5000}).should('be.visible')
        cy.contains('p', message).should('be.visible')
        cy.contains('button', 'Fechar').click()
    },

    goToVideoPage(){
        cy.contains('button', 'Mídia').click()
        cy.contains('button', 'Videos', {timeout:5000}).click()
    },

    clearVideoEditionRequiredFields(field){
        const fields = {
            "video title": 'input[placeholder="Título do vídeo"]',
            "video code": 'input[placeholder="Código do vídeo"]',
        }
        cy.get(fields[field]).clear()
    },

    clickToCancelVideoEdition(){
        cy.contains('button', 'Cancelar').click()
    },

    clickToDeleteVideo(){
        cy.contains('button','Deletar',{timeout:5000}).click()
    },

    clickToConfirmDelete(){
        cy.get('.modalDeleteVideoBox',{timeout:5000}).should('be.visible')
        cy.contains('p','Tem certeza que deseja deletar o vídeo?').should('be.visible')
        cy.contains('button', 'Sim').click()
    },

    clickToCancelDelete(){
        cy.get('.modalDeleteVideoBox',{timeout:5000}).should('be.visible')
        cy.contains('p','Tem certeza que deseja deletar o vídeo?').should('be.visible')
        cy.contains('.modalDeleteVideoActions button', 'Cancelar').click()
    },

    cleaningVideoTest(videoName){

        const deleteIfExists = () => {

            cy.get("#searchVideo",{timeout:5000})
                .clear()
                .type(videoName)

            cy.get("body").then(($body) => {

                const hasVideo =
                    $body.find(".searchItem").filter((i, el) =>
                        el.innerText.includes(videoName)
                    ).length > 0

                if (hasVideo) {

                    cy.contains(".searchItem", videoName)
                        .first()
                        .click()

                    cy.contains("button", "Deletar").click()

                    cy.get(".modalDeleteVideoBox",{timeout:5000})
                        .should("be.visible")

                    cy.contains("button", "Sim").click()

                    cy.get("#articleModalBox",{timeout:5000})
                        .should("be.visible")

                    cy.contains("button", "Fechar").click()

                    cy.wait(300)

                    deleteIfExists()
                }
            })
        }

        deleteIfExists()
    },

    goToAdminPage(){
        cy.contains('a', 'Voltar para o menu').click()
        cy.contains('h2', 'O que deseja fazer?',{timeout:5000})
            .should('be.visible')
    }
}