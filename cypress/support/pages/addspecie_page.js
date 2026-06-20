///<reference types="cypress" />

export default {

    fillSpecieTextFields() {
        cy.get("#specieFormTitle").should("be.visible")

        cy.get("#inputSpecieName").type("Pinheiro Branco")
        cy.get("#inputCientificName").type("Pinus parviflora")
        cy.get("#inputMainImage").type("/testImages/whitepinus.png")

        cy.get("#specieText").type(
            "Pinus parviflora é uma árvore de porte médio, isso é um parágrafo."
        )
    },

    fillSpecieRadioFields(skip = null) {
        if (skip !== "tamanho") {
            cy.get('input[name="tamanho"][value="grande"]').check()
        }

        if (skip !== "crescimento") {
            cy.get('input[name="crescimento"][value="lento"]').check()
        }

        if (skip !== "tipo") {
            cy.get('input[name="tipo"][value="Conifera"]').check()
        }
    },

    fillSpecieCheckboxFields() {
        cy.get('input[type="checkbox"][value="cores frias"]').check()
    },

    fillSpecieGallery() {
        cy.get("#more").click()
        cy.get(".galleryInputContainer")
            .find("input.addSpecieInputs")
            .eq(0)
            .type("/testImages/whitepinus.png")

        cy.get("#more").click()
        cy.get(".galleryInputContainer")
            .find("input.addSpecieInputs")
            .eq(1)
            .type("/testImages/whitepinus.png")

        cy.get("#more").click()
        cy.get(".galleryInputContainer")
            .find("button.deleteSpecieGaleryPhoto")
            .eq(2)
            .click()

        cy.get(".galleryInputContainer").should("have.length", 2)
    },

    fillSpeciesCorrectly() {
        this.fillSpecieTextFields()
        this.fillSpecieRadioFields()
        this.fillSpecieCheckboxFields()
        this.fillSpecieGallery()
    },

    goToSpeciesPage() {
        cy.contains("button", "Índice").click()
        cy.contains("button", "Espécies", { timeout: 5000 }).should("be.visible")
        cy.contains("button", "Espécies").click()
    },

    cleanUpTestSpecie(specieName) {
    cy.get("#adminLink").click()
    cy.contains("button", "Editar/Excluir Espécie").click()

    const deleteIfExists = () => {
        cy.get("#searchVideo").clear().type(specieName)

        cy.get("body").then(($body) => {
            if ($body.find(".searchItem").length > 0) {
                cy.contains(".searchItem", specieName).click()
                cy.contains("button", "Deletar").click()
                cy.get("#modalDeleteSpecie")
                  .contains("button", "Sim")
                  .click()

                cy.get("#articleModalBox > button").click()

                deleteIfExists()
            }
        })
    }

    deleteIfExists()
},

    clickPostButton() {
        cy.get("#post").click()
    },

    clickCancelButton() {
        cy.contains("button", "Cancelar").click()
    },

    seeTheMessage(message) {
        cy.get("#articleModalBox > p").should("be.visible").and("have.text", message)
    },

    clickToCloseModal() {

        cy.get("#articleModalBox").find("button", "Entrar").click()
    },

    clearInputField(field) {
        const fields = {
            "name": "#inputSpecieName",
            "scientific name": "#inputCientificName",
            "main image": "#inputMainImage",
            "description": "#specieText"
        }

        cy.get(fields[field]).clear()
    }
}
