export default{
    editHistoryPage(){
    cy.contains('h3', 'Edite abaixo o texto da página História',{timeout:5000}).should('be.visible')
    cy.get('#textHistory').click().type("{end}\n\nEDIT-HISTORY-PAGE-TEST-TEXT")
    },
    saveTheEdition(){
        
    cy.on("window:alert", (text) => {
        expect(text).to.equal("História salva com sucesso!")
    })
    cy.contains('button', 'Salvar').click()
    },
    cancelEdition(){
        cy.contains("button", "Cancelar").click()
    },
    cleanupHistoryPage() {
    const testText = "EDIT-HISTORY-PAGE-TEST-TEXT"

    cy.get('#textHistory').then(($textarea) => {
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