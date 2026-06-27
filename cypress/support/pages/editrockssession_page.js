export default{
    editRocksSessionPage(){
    cy.contains('h3', "Editar página Rocks",{timeout:5000}).should('be.visible')
    cy.get('#textHistory').click().type('{end}\n\n <img src="/testImages/testimage.png" alt=""/>')
    cy.get('#textHistory').click().type("{end}\n\nEDIT-ROCKS-SESSION-TEST-TEXT")
    },
    saveTheEdition(){
        
    cy.on("window:alert", (text) => {
        expect(text).to.equal("Conteúdo salvo com sucesso!")
    })
    cy.contains('button', 'Salvar').click()
    },
    cancelEdition(){
        cy.contains("button", "Cancelar").click()
    },
    cleanupRocksSessionPage() {
    const imageTag = '<img src="/testImages/testimage.png" alt=""/>'
    const testText = "EDIT-ROCKS-SESSION-TEST-TEXT"

    cy.get("#textHistory").then(($textarea) => {
        const currentText = String($textarea.val())

        let cleanText = currentText

        if (cleanText.includes(imageTag)) {
            cleanText = cleanText.replace("\n\n" + imageTag, "")
            cleanText = cleanText.replace(imageTag, "")
        }

        if (cleanText.includes(testText)) {
            cleanText = cleanText.replace("\n\n" + testText, "")
            cleanText = cleanText.replace(testText, "")
        }

        if (cleanText !== currentText) {
            cy.wrap($textarea)
                .invoke("val", cleanText)
                .trigger("input")
                .trigger("change")
        }
    })

    cy.on("window:alert", (text) => {
        expect(text).to.equal("Conteúdo salvo com sucesso!")
    })

    cy.contains("button", "Salvar").click()
}
    
}