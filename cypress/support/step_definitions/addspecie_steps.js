import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import usersection_page from "../pages/usersection_page"
import addspecie_page from "../pages/addspecie_page"
import specie_page from "../pages/specie_page"
import adminPage_page from "../pages/adminPage_page"
import species_page from "../pages/species_page"

const specieName = "Pinheiro Branco"
const scientificName = "Pinus parviflora"

After({ tags: "@addspecies" }, () => {
    addspecie_page.cleanUpTestSpecies(specieName)
})

Given("I am logged in as an administrator", () => {
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com", "123456")
    usersection_page.clickIntoCreateSpecieButton()
})

When("I create a new species", () => {
    addspecie_page.fillSpeciesCorrectly()
    addspecie_page.clickPostButton()
})

When("I create a new species to cancel", () => {
    addspecie_page.fillSpeciesCorrectly()
})

When("I create a new species with the {string} field left empty", (field) => {
    addspecie_page.fillSpeciesCorrectly()
    addspecie_page.clearField(field)
    addspecie_page.clickPostButton()
})

When("I create a new species with the {string} option left unselected", (input) => {
    addspecie_page.fillSpeciesTextFields()
    addspecie_page.fillSpeciesRadioFields(input)
    addspecie_page.fillSpeciesCheckboxFields()
    addspecie_page.fillSpeciesGallery()
    addspecie_page.clickPostButton()
})

When("I create a new species without selecting a plant color", () => {
    addspecie_page.fillSpeciesTextFields()
    addspecie_page.fillSpeciesRadioFields()
    addspecie_page.fillSpeciesGallery()
    addspecie_page.clickPostButton()
})

When("I click to cancel the species creation", () => {
    addspecie_page.clickCancelButton()
})

Then("I see the species creation message {string}", (message) => {
    addspecie_page.seeTheMessage(message)
})

Then("I see the species in the list", () => {
    addspecie_page.clickToCloseModal()
    addspecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(specieName)
})

Then("I don't see the species in the list", () => {
    addspecie_page.clickToCloseModal()
    addspecie_page.goToSpeciesPage()
    species_page.specieIsNotInTheList(specieName)
})

Then("I don't see the canceled species in the list", () => {
    addspecie_page.goToSpeciesPage()
    species_page.specieIsNotInTheList(specieName)
})

Then("I can view its details", () => {
    specie_page.viewSpecieDetails(specieName, scientificName)
})

Then("I return to the admin menu page", () => {
    adminPage_page.adminPageTitleIsVisible()
})
