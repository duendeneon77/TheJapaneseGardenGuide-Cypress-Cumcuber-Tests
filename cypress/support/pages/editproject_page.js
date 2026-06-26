export default{
    editProjectPage(){
    cy.contains('h3', 'Edite abaixo o texto da página Projeto',{timeout:5000}).should('be.visible')
    cy.get('#textProject').click().type("{end}\n\nEDIT-PROJECT-PAGE-TEST-TEXT")
    },
    saveTheEdition(){
        
    cy.on("window:alert", (text) => {
        expect(text).to.equal("Projeto salvo com sucesso!")
    })
    cy.contains('button', 'Salvar').click()
    },
    cancelEdition(){
        cy.contains("button", "Cancelar").click()
    },
    cleanupProjectPage() {
    const testText = "EDIT-PROJECT-PAGE-TEST-TEXT"

    cy.get('#textProject').then(($textarea) => {
        const currentText = $textarea.val()

        if (currentText.includes(testText)) {

            const cleanText = currentText.replace(testText, "").trim()

            cy.wrap($textarea)
                .invoke("val", cleanText)
                .trigger("input")
                .trigger("change")
        }
    })

    cy.contains('button', 'Salvar').click()
}
    
}
