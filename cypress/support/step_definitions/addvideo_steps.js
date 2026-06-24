import { When, Then,Before,After
} from "@badeball/cypress-cucumber-preprocessor"

/// <reference types="cypress" />

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import adminPage_page from "../pages/adminPage_page"
import addvideo_page from "../pages/addvideo_page"
import videos_page from "../pages/videos_page"


Before({tags:"@beforeAddVideo"},()=>{
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")
    adminPage_page.goToEditOrDeleteVideo()
    addvideo_page.cleaningAddVideoTest()
    addvideo_page.goToAdminPage()
    adminPage_page.goToAddVideo()
}),
When("I fill the necessary video fields",()=>{
    addvideo_page.fillVideoFields()
}),
When("I click to post the video",()=>{
    addvideo_page.clickToPostVideo()
})

Then("I see the video creation message {string}",(message)=>{
    addvideo_page.dealingWithAddVideoMessage(message)
}),
Then('I see the video in the list',()=>{
    addvideo_page.goToVideosPage()
    videos_page.theVideoExistsInTheVideoPage()
}),
Then("I can check the video details",()=>{
    videos_page.theVideoExistsInTheVideoPage()
    videos_page.checkVideoDetails()
}),
When("I try to add a new video with missing field {string}",(field)=>{
    addvideo_page.clearVideoFieldInput(field)
    addvideo_page.clickToPostVideo()
}),
Then("I dont see the video in the list",()=>{
    addvideo_page.goToVideosPage()
    videos_page.theVideoDoesNotExistInTheVideoPage()
}),
When("I try to add a new video with a invalid video link", ()=>{
    addvideo_page.fillVideoFields()
    addvideo_page.fillingInputWithUnvalidCode()
    addvideo_page.clickToPostVideo()
}),
When("I click to cancel the video creation",()=>{
    addvideo_page.clickToCancel()
})