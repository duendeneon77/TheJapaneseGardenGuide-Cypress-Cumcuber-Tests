import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor"

/// <reference types="cypress" />

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import adminPage_page from "../pages/adminPage_page"
import addvideo_page from "../pages/addvideo_page"
import videos_page from "../pages/videos_page"


Before({ tags: "@beforeAddVideo" }, () => {
    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com", "123456")
    adminPage_page.goToEditOrDeleteVideo()
    addvideo_page.cleanUpTestVideo()
    addvideo_page.goToAdminPage()
    adminPage_page.goToAddVideo()
})


When("I fill the necessary video fields", () => {
    addvideo_page.fillVideoFields()
})

When("I click to post the video", () => {
    addvideo_page.clickPostVideo()
})

Then("I see the video creation message {string}", (message) => {
    addvideo_page.handleVideoCreationMessage(message)
})


Then("I see the video in the video list", () => {
    addvideo_page.goToVideosPage()
    videos_page.theVideoExistsInTheVideoPage("Video Test")
})

Then("I don't see the video in the video list", () => {
    addvideo_page.goToVideosPage()
    videos_page.theVideoDoesNotExistInTheVideoPage("Video Test")
})

Then("I can view the video details", () => {
    videos_page.theVideoExistsInTheVideoPage("Video Test")
    videos_page.checkVideoDetails("video description test, video description text")
})

When("I try to add a video with missing field {string}", (field) => {
    addvideo_page.clearVideoField(field)
    addvideo_page.clickPostVideo()
})

When("I try to add a video with an invalid video link", () => {
    addvideo_page.fillVideoFields()
    addvideo_page.fillVideoWithInvalidCode()
    addvideo_page.clickPostVideo()
})


When("I click to cancel the video creation", () => {
    addvideo_page.clickCancelVideoCreation()
})