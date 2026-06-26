import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import editproject_page from "../pages/editproject_page"
import project_page from "../pages/project_page"

Before({tags:"@editProjectPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditProjectPage()
})
After({ tags: "@editProjectPage" }, () => {
    project_page.goToAdminPage()
    adminPage_page.goToEditProjectPage()
    editproject_page.cleanupProjectPage()
})
When("I edit the Project Page",()=>{
    editproject_page.editProjectPage()
})
Then('I click to save the project page edition',()=>{
    editproject_page.saveTheEdition()
})
Then('I see the the edited project page',()=>{
    project_page.theProjectPageWasEdited()
})
Then ("I click to cancel the project page edition",()=>{
    editproject_page.cancelEdition()
})
Then('I dont see the the edited project page',()=>{
    adminPage_page.goToProjectPage()
    project_page.theProjectPageWasNotEdited()

})

