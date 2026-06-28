import { When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor"

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import adminPage_page from "../pages/adminPage_page"
import addvideo_page from "../pages/addvideo_page"
import editordeletevideo_page from "../pages/editordeletevideo_page"
import videos_page from "../pages/videos_page"

Before({tags:"@editOrDeleteVideo"},()=>{

    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")

    adminPage_page.goToEditOrDeleteVideo()

    editordeletevideo_page.cleaningVideoTest("Video Test")
    editordeletevideo_page.cleaningVideoTest("Edited Video")

    editordeletevideo_page.goToAdminPage()
    adminPage_page.goToAddVideo()

    addvideo_page.fillVideoFields()
    addvideo_page.clickPostVideo()
    addvideo_page.handleVideoCreationMessage()

    addvideo_page.goToAdminPage()
    adminPage_page.goToEditOrDeleteVideo()
})

When("I edit the video information",()=>{

    editordeletevideo_page.lookForVideo()
    editordeletevideo_page.editVideoInformation()

})

When("I click to save the video changes",()=>{

    editordeletevideo_page.clickToSaveVideoEdition()
})

Then("I see the video update message {string}",(message)=>{

    editordeletevideo_page.handleEditOrDeleteVideoMessage(message)
})

Then("I can view the updated video details",()=>{

    editordeletevideo_page.goToVideoPage()
    videos_page.theVideoExistsInTheVideoPage('Edited Video')
    videos_page.checkVideoDetails('edited video description')
})

When("I edit the video without required fields {string}",(field)=>{

    editordeletevideo_page.lookForVideo()
    editordeletevideo_page.editVideoInformation()
    editordeletevideo_page.clearVideoEditionRequiredFields(field)
    editordeletevideo_page.clickToSaveVideoEdition()
})

Then("the video details remain unchanged",()=>{

    editordeletevideo_page.goToVideoPage()
    videos_page.theVideoExistsInTheVideoPage('Video Test')
    videos_page.theVideoDoesNotExistInTheVideoPage('Edited Video')
})

Then("I cancel the video editing",()=>{

    editordeletevideo_page.clickToCancelVideoEdition()
})

When("I click to delete the video",()=>{

    editordeletevideo_page.lookForVideo()
    editordeletevideo_page.clickToDeleteVideo()
})

When("I confirm the video deletion",()=>{

    editordeletevideo_page.clickToConfirmDelete()
})

Then("the video should no longer exist",()=>{

    editordeletevideo_page.goToVideoPage()
    videos_page.theVideoDoesNotExistInTheVideoPage('Video Test')
})

Then("I cancel the video deletion",()=>{

    editordeletevideo_page.clickToCancelDelete()
})

Then("the video should still exist",()=>{

    editordeletevideo_page.goToVideoPage()
    videos_page.theVideoExistsInTheVideoPage('Video Test')
    videos_page.goToAdminPage()
})

After({tags:"@editOrDeleteVideoAfter"},()=>{

    adminPage_page.goToEditOrDeleteVideo()

    editordeletevideo_page.cleaningVideoTest("Video Test")
    editordeletevideo_page.cleaningVideoTest("Edited Video")
})