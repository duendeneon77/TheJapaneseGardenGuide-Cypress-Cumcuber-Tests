import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

import home_page from '../pages/home_page'
import login_page from '../pages/login_page'
import adminPage_page from '../pages/adminPage_page'
import edithistory_page from "../pages/edithistory_page"
import history_page from "../pages/history_page"

Before({tags:"@editHistoryPage"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditHistoryPage()
})
After({ tags: "@editHistoryPage" }, () => {
    history_page.goToAdminPage()
    adminPage_page.goToEditHistoryPage()
    edithistory_page.cleanupHistoryPage()
})
When("I edit the historyPage",()=>{
    edithistory_page.editHistoryPage()
})
Then('I click to save the story page edition',()=>{
    edithistory_page.saveTheEdition()
})
Then('I see the the edited history page',()=>{
    history_page.theHistoryPageWasEdited()
})
Then ("I click to cancel the history page edition",()=>{
    edithistory_page.cancelEdition()
})
Then('I dont see the edited history page',()=>{
    adminPage_page.goToHistoryPage()
    history_page.theHistoryPageWasNotEdited()

})

