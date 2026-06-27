import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import editbridgessession_page from "../pages/editbridgesession_page"
import bridgessession_pages from "../pages/bridgessession_page"
import bridgessession_page from "../pages/bridgessession_page"

Before({tags:"@editBridgesPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditBridgesSession()
})
After({ tags: "@editBridgesPage" }, () => {
    
    bridgessession_page.goToAdminPage()
    adminPage_page.goToEditBridgesSession()
    editbridgessession_page.cleanupBridgesSessionPage()
})
When("I edit the bridges session",()=>{
    editbridgessession_page.editBridgesSessionPage()
})
Then('I click to save the bridges session edition',()=>{
    editbridgessession_page.saveTheEdition()
})
Then('I see the the edited bridges session',()=>{
    bridgessession_page.theBridgesSessionWasEdited()
})
Then ("I click to cancel the bridges session edition",()=>{
    
    editbridgessession_page.cancelEdition()
})
Then('I dont see the the edited bridges session',()=>{
    adminPage_page.goToBridgesSessionPage()
    bridgessession_page.theBridgesSessionWasNotEdited()

})

