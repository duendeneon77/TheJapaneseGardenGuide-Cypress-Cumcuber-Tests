import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import editrockssession_page from "../pages/editrockssession_page"
import rockssession_page from "../pages/rockssession_page"

Before({tags:"@editRocksPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditRocksSession()
})
After({ tags: "@editRocksPage" }, () => {
    rockssession_page.goToAdminPage()
    adminPage_page.goToEditRocksSession()
    editrockssession_page.cleanupRocksSessionPage()
})
When("I edit the rocks session",()=>{
    editrockssession_page.editRocksSessionPage()
})
Then('I click to save the rocks session edition',()=>{
    editrockssession_page.saveTheEdition()
})
Then('I see the the edited rocks session',()=>{
    rockssession_page.theRocksSessionWasEdited()
})
Then ("I click to cancel the rocks session edition",()=>{
    
    editrockssession_page.cancelEdition()
})
Then('I dont see the edited rocks session',()=>{
    adminPage_page.goToRocksSessionPage()
    rockssession_page.theRocksSessionWasNotEdited()

})

