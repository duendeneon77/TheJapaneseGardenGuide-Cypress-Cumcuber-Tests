export default {

    accessLogin() {
        cy.visit("/")
        cy.contains("button","Login").click()
    }

}