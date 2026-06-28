import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import edittorosession_page from "../pages/edittorosession_page"
import torosession_page from "../pages/torosession_page"

Before({tags:"@editToroPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditToroSession()
})
After({ tags: "@editToroPage" }, () => {
    torosession_page.goToAdminPage()
    adminPage_page.goToEditToroSession()
    edittorosession_page.cleanupToroSessionPage()
})
When("I edit the toro session",()=>{
    edittorosession_page.editToroSessionPage()
})
Then('I click to save the toro session edition',()=>{
    edittorosession_page.saveTheEdition()
})
Then('I see the the edited toro session',()=>{
    torosession_page.theToroSessionWasEdited()
})
Then ("I click to cancel the toro session edition",()=>{
    edittorosession_page.cancelEdition()
})
Then('I dont see the edited toro session',()=>{
    adminPage_page.goToToroSessionPage()
    torosession_page.theToroSessionWasNotEdited()

})

