export default {

    deleteTestArticle(article) {

        const deleteTestArticleIfExists = (article) => {

            cy.get("#searchVideo")
                .clear()
                .type(article)

            cy.get("body").then(($body) => {

                const hasArticle =
                    $body.find(".searchItem").filter((i, el) =>
                        el.innerText.includes(article)
                    ).length > 0

                if (!hasArticle) {
                    cy.log(`Article "${article}" not found.`)
                    return
                }

                cy.contains(".searchItem", article)
                    .first()
                    .click()

                cy.contains("button", "Deletar")
                    .click()

                cy.get(".modalDeleteArticleBox", { timeout: 5000 })
                    .should("be.visible")

                cy.contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox", { timeout: 5000 })
                    .should("be.visible")

                cy.contains("button", "Fechar")
                    .click()

                cy.wait(300)

                deleteTestArticleIfExists(article)
            })
        }

        deleteTestArticleIfExists(article)
    },

    searchArticleAndClick(articleToBeFound) {
        cy.get("#searchVideo")
            .clear()
            .type(articleToBeFound)

        cy.contains(".searchItem", articleToBeFound, { timeout: 5000 })
            .click()
    },

    editingArticleTitle(editedTitle) {
        cy.get('input[name="titulo"]')
            .clear()
            .type(editedTitle)
    },

    editingArticleImage(editArticleImg) {
        cy.get('input[name="imagem"]')
            .clear()
            .type(editArticleImg)
    },

    editingArticleText(text) {
        cy.get('#specieText')
            .clear()
            .type(text)
    },

    clickToSaveEdit() {
        cy.contains("button", "Salvar").click()
    },

    dealingWithEditionMessage(message) {

        cy.get("#articleModalBox", { timeout: 5000 })
            .should("be.visible")

        cy.contains("#articleModalBox p", message)
            .should("be.visible")

        cy.contains("button", "Fechar").click()
    },

    goToArticlesPage() {
        cy.contains("button", "Mídia").click()
        cy.contains("button", "Artigos", { timeout: 5000 }).click()
    },

    clickToDeleteArticle() {
        cy.contains("button", "Deletar").click()
    },

    confirmArticleDeletion() {
        cy.get(".modalDeleteArticleBox", { timeout: 5000 })
            .should("be.visible")

        cy.contains("button", "Sim").click()
    },

    clearArticlesRequiredFields(field) {

        const fields = {
            "articleTitle": 'input[name="titulo"]',
            "articleText": '#specieText'
        }

        cy.get(fields[field]).clear()
    },

    clickToCancelArticleEdition() {
        cy.contains("button", "Cancelar").click()
    },

    clickToCancelArticleDelection() {
        cy.get(".modalDeleteArticleBox", { timeout: 5000 })
            .should("be.visible")

        cy.contains(".modalDeleteArticleActions button", "Cancelar")
            .click()
    },

    goToAdminMenu() {
        cy.get(".backUserButton").click()
    }
}