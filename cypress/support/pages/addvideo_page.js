/// <reference types="cypress" />

export default{
    fillVideoFields(){
        
    cy.get("#inputVideoName").type("Video Test")
    cy.get("#inputVideoCode").type("https://www.youtube.com/embed/nxoLurgMSZA?si=ejsoYKtkzVoP27DZ")
    cy.get("#videoText").type("video description test, video description text")

    },
    clickToPostVideo(){
        
    cy.contains("button", "Postar").click()
    },
    dealingWithAddVideoMessage(message){
    cy.get('#articleModalBox',{timeout:5000}).should('be.visible')
    cy.contains("p", message).should('be.visible')
    cy.contains("button", "Fechar").click()

    },
    goToVideosPage(){
    cy.contains('button', 'Mídia').click()
    cy.contains('button', 'Videos',{timeout:5000}).click()
    },
    clearVideoFieldInput(field){
        const fields = {
            "video name": "#inputVideoName",
            "video code": "#inputVideoCode",
        }
        cy.get(fields[field]).clear()
    },
    fillingInputWithUnvalidCode(){
        cy.get("#inputVideoCode").clear()
        cy.get("#inputVideoCode").type("https://www.youtube.com/InvalidVideoEmbedCode")

    },
    clickToCancel(){
        cy.contains('button', 'Cancelar').click()
        cy.contains('h2', 'O que deseja fazer?',{timeout:5000}).should('be.visible')
    },
    cleaningAddVideoTest(){

    const deleteTestVideoIfExists = () => {

        cy.get("#searchVideo",{timeout:5000})
            .clear()
            .type("Video Test")

        cy.get("body").then(($body) => {

            const hasVideo =
                $body.find(".searchItem").filter((i, el) =>
                    el.innerText.includes("Video Test")
                ).length > 0

            if (hasVideo) {

                cy.contains(".searchItem", "Video Test")
                    .first()
                    .click()

                cy.contains("button", "Deletar")
                    .click()

                cy.get(".modalDeleteVideoBox", { timeout: 5000 })
                    .should("be.visible")

                cy.contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox", { timeout: 5000 })
                    .should("be.visible")

                cy.contains("button", "Fechar")
                    .click()

                cy.wait(300)

                deleteTestVideoIfExists()
            }
        })
    }

    deleteTestVideoIfExists()
},
goToAdminPage(){
    cy.contains('a', 'Voltar para o menu').click()
}

    
}