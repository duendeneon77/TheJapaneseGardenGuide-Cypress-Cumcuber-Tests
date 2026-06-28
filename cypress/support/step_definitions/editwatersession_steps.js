import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import editwatersession_page from "../pages/editwatersession_page"
import watersession_page from "../pages/watersession_page"

Before({tags:"@editWaterPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditWaterSession()
})
After({ tags: "@editWaterPage" }, () => {
    watersession_page.goToAdminPage()
    adminPage_page.goToEditWaterSession()
    editwatersession_page.cleanupWaterSessionPage()
})
When("I edit the water session",()=>{
    editwatersession_page.editWaterSessionPage()
})
Then('I click to save the water session edition',()=>{
    editwatersession_page.saveTheEdition()
})
Then('I see the the edited water session',()=>{
    watersession_page.theWaterSessionWasEdited()
})
Then ("I click to cancel the water session edition",()=>{
    editwatersession_page.cancelEdition()
})
Then('I dont see the edited water session',()=>{
    adminPage_page.goToWaterSessionPage()
    watersession_page.theWaterSessionWasNotEdited()

})

