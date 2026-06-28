export default {

    deleteTestArticle() {

        const deleteTestArticleIfExists = () => {

            cy.get("#searchVideo")
                .clear()
                .type("Test Article")

            cy.get("body").then(($body) => {

                const hasArticle =
                    $body.find(".searchItem").filter((i, el) =>
                        el.innerText.includes("Test Article")
                    ).length > 0

                if (hasArticle) {

                    cy.contains(".searchItem", "Test Article")
                        .first()
                        .click()

                    cy.contains("button", "Deletar")
                        .click()

                    cy.get(".modalDeleteArticleBox", { timeout: 5000 })
                        .should('be.visible')

                    cy.contains("button", "Sim")
                        .click()

                    cy.get("#articleModalBox", { timeout: 5000 })
                        .should('be.visible')

                    cy.contains("button", "Fechar")
                        .click()

                    cy.wait(300)

                    deleteTestArticleIfExists()
                }
            })
        }

        deleteTestArticleIfExists()
    },

    fillingArticleFields() {

        cy.get("#addArticleTitle", { timeout: 5000 }).should('be.visible')

        cy.get('input[placeholder="nome do artigo"]').type('Test Article')

        cy.get("input").eq(1).type("/testImages/articleimage.png")

        cy.get("#specieText")
            .type(`Paragraph test
                
                Paragraph test 2

                Paragraph test 3`)
    },

    clearArticleField(field) {

        const fields = {
            "articleName": 'input[placeholder="nome do artigo"]',
            "articleText": '#specieText',
        }

        cy.get(fields[field]).clear()
    },

    clickPublishArticle() {
        cy.get("#post").click()
    },

    checkArticleCreationMessage(message) {

        cy.get("#articleModalBox", { timeout: 5000 }).should('be.visible')
        cy.contains('#articleModalBox p', message).should("be.visible")
        cy.contains("button", "Fechar").click()
    },

    checkCreatedArticle() {

        cy.contains('h1', "Artigos", { timeout: 5000 }).should('be.visible')

        cy.contains("h2", "Test Article")
            .parent()
            .contains("a", "Ler mais")
            .click()

        cy.contains('h1', "Test Article", { timeout: 5000 }).should('be.visible')

        cy.get('img.articleImage[alt="Test Article"]').should('be.visible')

        cy.get('.articleText p').eq(0).should('have.text', 'Paragraph test')
        cy.get('.articleText p').eq(1).should('have.text', 'Paragraph test 2')
        cy.get('.articleText p').eq(2).should('have.text', 'Paragraph test 3')
    },

    cancelArticlePublishing() {
        cy.contains("button", "Cancelar").click()
        cy.contains("h2", "O que deseja fazer?", { timeout: 5000 }).should('be.visible')
    },

    checkArticleNotCreated() {
        cy.contains('h1', "Artigos", { timeout: 5000 }).should('be.visible')
        cy.get('body').should('not.contain', 'Test Article')
    },

    goToArticlePage() {
        cy.contains("button", "Mídia").click()
        cy.contains("button", "Artigos").click()
    },

    goToAdminPage() {
        cy.contains("a", "Voltar para o menu").click()
    }
}