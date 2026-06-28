///<reference types="cypress"/>

export default {

   cleanUpEditedSpecies(editedSpeciesName, speciesName) {

    const deleteEditedSpeciesIfExists = () => {

        cy.get("#searchVideo").clear().type(editedSpeciesName)

        cy.get("body").then(($body) => {

            if ($body.text().includes(editedSpeciesName)) {

                cy.contains(".searchItem", editedSpeciesName)
                    .first()
                    .click()

                cy.contains("button", "Deletar").click()

                cy.get("#modalDeleteSpecie")
                    .contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox > button").click()

                cy.wait(300)

                deleteEditedSpeciesIfExists()
            }
        })
    }

    const deleteSpeciesIfExists = () => {

        cy.get("#searchVideo").clear().type(speciesName)

        cy.get("body").then(($body) => {

            if ($body.text().includes(speciesName)) {

                cy.contains(".searchItem", speciesName)
                    .first()
                    .click()

                cy.contains("button", "Deletar").click()

                cy.get("#modalDeleteSpecie")
                    .contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox > button").click()

                cy.wait(300)

                deleteSpeciesIfExists()
            }
        })
    }

    deleteEditedSpeciesIfExists()

    cy.then(() => {
        deleteSpeciesIfExists()
    })

    cy.then(() => {
        cy.contains("a", "Voltar para o menu").click()
    })
},


// ---------------- EDIT ----------------

selectSpeciesToEditOrDelete(speciesName){
    cy.get("#searchVideo").type(speciesName)
    cy.contains(".searchItem", speciesName, {timeout:5000}).click()
},

editSpeciesTotally(editedSpeciesName, editedScientificName){
    cy.get('input[name="titulo"]').clear()
    cy.get('input[name="titulo"]').type(editedSpeciesName)

    cy.get('input[name="nomeCientifico"]').clear()
    cy.get('input[name="nomeCientifico"]').type(editedScientificName)

    cy.get('input[name="imagem"]').clear()
    cy.get('input[name="imagem"]').type("/testImages/editedwhitepine.jpg")

    cy.get('input[name="tamanho"][value="pequeno"]').check()
    cy.get('input[name="crescimento"][value="rapido"]').check()
    cy.get('input[name="tipo"][value="Caducifolia"]').check()

    cy.get('input[type="checkbox"][value="cores frias"]').uncheck()
    cy.get('input[type="checkbox"][value="branca"]').check()

    cy.get(".textAreaEditSpecie").clear()
    cy.get(".textAreaEditSpecie").type("Edited Text Here")

    cy.get(".galeryInputContainerEditSpecie input").eq(0)
        .clear()
        .type("/testImages/editedwhitepine.jpg")

    cy.get(".buttonXeditSpecieGalery").eq(1).click()

    cy.get("#more").click()

    cy.get(".galeryInputContainerEditSpecie input").eq(1)
        .clear()
        .type("/testImages/editedwhitepine.jpg")

    cy.get("#more").click()

    cy.get(".galeryInputContainerEditSpecie input").eq(2)
        .clear()
        .type("/testImages/editedwhitepine.jpg")
},

editSpeciesTotallyWithoutRequiredFields(editedSpeciesName, editedScientificName, field){
    this.editSpeciesTotally(editedSpeciesName, editedScientificName)
    this.clearEditSpeciesInputField(field)
},

clickToSaveEdition(){
    cy.contains("button", "Salvar").click()
},

seeMessageAndExit(message){
    cy.get("#articleModalBox",{timeout:5000}).should('be.visible')
    cy.get("#articleModalBox p").should("have.text", message)
    cy.contains("button", "Fechar").click()
},

goToSpeciesPage(){
    cy.contains('button', "Índice",{timeout:5000}).click()
    cy.contains('button', "Espécies",{timeout:5000}).click()
},

clearEditSpeciesInputField(field){
    const fields = {
        "titulo": '.inputEditSpecie[name="titulo"]',
        "nomeCientifico": '.inputEditSpecie[name="nomeCientifico"]',
    }

    cy.get(fields[field]).clear()
},

cancelEdit(){
    cy.contains("button", "Cancelar").click()
    cy.contains("h3", "Buscar espécie", {timeout:5000}).should('be.visible')
},

clickToDelete(){
    cy.contains("button", "Deletar").click()
},

confirmationToDeleteMessage(message){
    cy.get("#modalDeleteSpecie", {timeout:5000}).should('be.visible')
    cy.contains("p", message).should("be.visible")
},

confirmDeletion(){
    cy.contains("button", "Sim").click()
    cy.get("#articleModalBox", {timeout:5000}).should('be.visible')
    cy.contains("p", "Espécie removida com sucesso!").should('be.visible')
    cy.contains("button", "Fechar").click()
    cy.contains("h3", "Buscar espécie",{timeout: 5000})
},

cancelDeletion(){
    cy.get("#modalDeleteSpecie",{timeout:5000})
        .should("be.visible")
        .contains("button", "Cancelar")
        .click()
}

}