///<reference types ="cypress" />

export default{
    clickIntoCreateSpecieButton(){
        cy.contains("button", "Cadastrar Espécie").click()
    },
    clickIntoEditOrDeleteSpecieButton(){
        cy.contains("button", "Editar/Excluir Espécie").click()
    }
}