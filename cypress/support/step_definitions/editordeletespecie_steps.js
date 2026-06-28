import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import addspecie_page from "../pages/addspecie_page"
import species_page from "../pages/species_page"
import specie_page from "../pages/specie_page"
import editordeletespecie_page from "../pages/editordeletespecie_page"
import adminPage_page from "../pages/adminPage_page"

const speciesName = "Pinheiro Branco"
const scientificName = "Pinus parviflora"
const editedSpeciesName = "Pinheiro Branco Editado"
const editedScientificName = "Pinus Editado"
const creationMessage = "Espécie criada com sucesso!"

Before({ tags: "@editOrDeleteSpecies" }, () => {

    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com", "123456")
    adminPage_page.goToEditDeleteSpeciePage()

    editordeletespecie_page.cleanUpEditedSpecies(editedSpeciesName, speciesName)

    adminPage_page.goToAddSpeciePage()
    addspecie_page.fillSpeciesCorrectly()
    addspecie_page.clickPostButton()
    addspecie_page.seeTheMessage(creationMessage)
    addspecie_page.clickToCloseModal()
    addspecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(speciesName)

    specie_page.returnToAdminPage()
    adminPage_page.goToEditDeleteSpeciePage()

    editordeletespecie_page.selectSpeciesToEditOrDelete(speciesName)
})

After({ tags: "@deleteCanceledDeleteSpecie" }, () => {
    specie_page.returnToAdminPage()
    adminPage_page.goToEditDeleteSpeciePage()
    editordeletespecie_page.cleanUpEditedSpecies(editedSpeciesName, speciesName)
})

When("I edit the species information", () => {
    editordeletespecie_page.editSpeciesTotally(editedSpeciesName, editedScientificName)
})

Then("I click to save the species edition", () => {
    editordeletespecie_page.clickToSaveEdition()
})

Then("I see the species update message {string}", (message) => {
    editordeletespecie_page.seeMessageAndExit(message)
})

Then("I can view the updated species details", () => {
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(editedSpeciesName)
    specie_page.viewEditedSpecieDetails(editedSpeciesName, editedScientificName)
})

Then("I edit the species with missing field {string}", (field) => {
    editordeletespecie_page.editSpeciesTotallyWithoutRequiredFields(
        editedSpeciesName,
        editedScientificName,
        field
    )

    editordeletespecie_page.clickToSaveEdition()
})

Then("the species details remain unchanged", () => {
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(speciesName)
    specie_page.viewSpecieDetails(speciesName, scientificName)
})

Then("I cancel the species edition", () => {
    editordeletespecie_page.cancelEdit()
})

Then("I decide to cancel the species edition", () => {
    editordeletespecie_page.cancelEdit()
})

When("I click to delete the species", () => {
    editordeletespecie_page.clickToDelete()
})

Then("I confirm the species deletion", () => {
    editordeletespecie_page.confirmDeletion()
})

Then("I cancel the species deletion", () => {
    editordeletespecie_page.cancelDeletion()
})

Then("the species should no longer exist", () => {
    editordeletespecie_page.goToSpeciesPage()
    species_page.specieIsNotInTheList(speciesName)
})

Then("the species should still exist", () => {
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(speciesName)
})