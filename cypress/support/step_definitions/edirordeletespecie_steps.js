import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import addspecie_page from "../pages/addspecie_page"
import species_page from "../pages/species_page"
import specie_page from "../pages/specie_page"
import editordeletespecie_page from "../pages/editordeletespecie_page"
import adminPage_page from "../pages/adminPage_page"

const specieName = "Pinheiro Branco"
const scientificName = "Pinus parviflora"
const editedSpecieName = "Pinheiro Branco Editado"
const editedScientificName = "Pinus Editado"
const creationMessage = "Espécie criada com sucesso!"


    
    Before({ tags: "@editOrDeleteSpecies" }, () => {

    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditDeleteSpeciePage()
    
    editordeletespecie_page.cleanUpEditedSpecie(editedSpecieName, specieName)

    adminPage_page.goToAddSpeciePage()
    addspecie_page.fillSpeciesCorrectly()
    addspecie_page.clickPostButton()
    addspecie_page.seeTheMessage(creationMessage)
    addspecie_page.clickToCloseModal()
    addspecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(specieName)
    specie_page.returnToAdminPage()
    adminPage_page.goToEditDeleteSpeciePage()
    editordeletespecie_page.selectSpecieToEditOrDelete(specieName)
})
After({ tags: "@deleteCanceledDeleteSpecie" }, () => {
    specie_page.returnToAdminPage()
    adminPage_page.goToEditDeleteSpeciePage()
    editordeletespecie_page.cleanUpEditedSpecie(editedSpecieName, specieName)
})




When("I edit the species information",()=>{
    editordeletespecie_page.editSpecieTotally(editedSpecieName, editedScientificName)
})
Then("I click to save the edition",()=>{
    editordeletespecie_page.clickToSaveTheEdition()
})
Then('I see the species update message {string}',(message)=>{
    editordeletespecie_page.seeTheMesageAndExit(message)
})
Then('I can view the updated species details',()=>{
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(editedSpecieName)
    specie_page.viewEditedSpecieDetails(editedSpecieName, editedScientificName)
})

Then('I delete the edited specie',()=>{
    editordeletespecie_page.cleanUpEditedSpecie(editedSpecieName)
    editordeletespecie_page.cleanUpOldSpecie(specieName)
})

Then("I edit the species without required fields {string}", (fields)=>{
    editordeletespecie_page.editSpecieTotallyWithoutRequiredFields(editedSpecieName,editedScientificName,fields)
    editordeletespecie_page.clickToSaveTheEdition()
})
Then("the species details remain unchanged",()=>{
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(specieName)
    specie_page.viewSpecieDetails(specieName,scientificName)
})
Then("I cancel the edition",()=>{
    editordeletespecie_page.iCancelTheEdit()
})

When("I click to delete the specie",()=>{
    editordeletespecie_page.clickToDelete()
})
Then("I decide to confirm the deletion",()=>{ 
    editordeletespecie_page.confirmTheDeletion()
})
Then("I decide to cancel the deletion",()=>{
    editordeletespecie_page.cancelDeletion()

})
Then('the species should no longer exist',()=>{
    editordeletespecie_page.goToSpeciesPage()
    species_page.specieIsNotInTheList(specieName)
})
Then('the species should still exist',()=>{
    editordeletespecie_page.goToSpeciesPage()
    species_page.lookingForSpecieInTheList(specieName)
})
Then('I decide to cancel the edition',()=>{
    editordeletespecie_page.iCancelTheEdit()
    
})
