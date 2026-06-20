
///<reference types="cypress"/>


export default{

   cleanUpEditedSpecie(editedSpecieName, specieName) {

    const deleteEditedSpecieIfExists = () => {

        cy.get("#searchVideo").clear().type(editedSpecieName)

        cy.get("body").then(($body) => {

            if ($body.text().includes(editedSpecieName)) {

                cy.contains(".searchItem", editedSpecieName)
                    .first()
                    .click()

                cy.contains("button", "Deletar").click()

                cy.get("#modalDeleteSpecie")
                    .contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox > button").click()

                cy.wait(300)

                deleteEditedSpecieIfExists()
            }
        })
    }

    const deleteSpecieIfExists = () => {

        cy.get("#searchVideo").clear().type(specieName)

        cy.get("body").then(($body) => {

            if ($body.text().includes(specieName)) {

                cy.contains(".searchItem", specieName)
                    .first()
                    .click()

                cy.contains("button", "Deletar").click()

                cy.get("#modalDeleteSpecie")
                    .contains("button", "Sim")
                    .click()

                cy.get("#articleModalBox > button").click()

                cy.wait(300)

                deleteSpecieIfExists()
            }
        })
    }

    deleteEditedSpecieIfExists()

    cy.then(() => {
        deleteSpecieIfExists()
    })

    cy.then(() => {
        cy.contains("a", "Voltar para o menu").click()
    })
},




    selectSpecieToEditOrDelete(specieName){
        cy.get("#searchVideo").type(specieName)
        cy.contains(".searchItem", specieName, {timeout:5000}).click()
    },

    editSpecieTotally(editedSpecieName, editedCientificName){
        cy.get('input[name="titulo"]').clear()
    cy.get('input[name="titulo"]').type(editedSpecieName)
    cy.get('input[name="nomeCientifico"]').clear()
    cy.get('input[name="nomeCientifico"]').type(editedCientificName)
    
    cy.get('input[name="imagem"]').clear()
    cy.get('input[name="imagem"]').type("/testImages/editedwhitepine.jpg")

    cy.get('input[name="tamanho"][value="pequeno"]').check()

    cy.get('input[name="crescimento"][value="rapido"]').check()

    cy.get('input[name="tipo"][value="Caducifolia"]').check()

    cy.get('input[type="checkbox"][value="cores frias"]').uncheck()

    cy.get('input[type="checkbox"][value="branca"]').check()

    cy.get(".textAreaEditSpecie").clear()

    cy.get(".textAreaEditSpecie").type("Edited Text Here")

    cy.get(".galeryInputContainerEditSpecie input").eq(0).clear().type("/testImages/editedwhitepine.jpg")

    cy.get(".buttonXeditSpecieGalery").eq(1).click()

    cy.get("#more").click()

    cy.get(".galeryInputContainerEditSpecie input").eq(1).clear().type("/testImages/editedwhitepine.jpg")

    cy.get("#more").click()

    cy.get(".galeryInputContainerEditSpecie input").eq(2).clear().type("/testImages/editedwhitepine.jpg")

    },
    editSpecieTotallyWithoutRequiredFields(editedSpecieName, editedCientificName, field){
        this.editSpecieTotally(editedSpecieName, editedCientificName)
        this.clearEditSpecieInputField(field)
    },
    clickToSaveTheEdition(){
        cy.contains("button", "Salvar").click()
    },
    seeTheMesageAndExit(message){
        cy.get("#articleModalBox",{timeout:5000}).should('be.visible')
        cy.get("#articleModalBox p").should("have.text", message)
        cy.contains("button", "Fechar").click()
    },
    goToSpeciesPage(){
        cy.contains('button', "Índice",{timeout:5000}).click()
        cy.contains('button', "Espécies",{timeout:5000}).click()
    },
    clearEditSpecieInputField(field){
    const fields = {
        "titulo": '.inputEditSpecie[name="titulo"]',
        "nomeCientifico": '.inputEditSpecie[name="nomeCientifico"]',
    }

    cy.get(fields[field]).clear()
    },
    iCancelTheEdit(){
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

    confirmTheDeletion(){
        cy.contains("button", "Sim").click()
        cy.get("#articleModalBox", {timeout:5000}).should('be.visible')
        cy.contains("p", "Espécie removida com sucesso!").should('be.visible')
        cy.contains("button", "Fechar").click()
        cy.contains("h3", "Buscar espécie",{timeout: 5000})
        
    },
    cancelDeletion(){
        cy.get("#modalDeleteSpecie",{timeout:5000}).should("be.visible").contains("button", "Cancelar").click()

    }



}