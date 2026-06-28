import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor"

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import adminPage_page from "../pages/adminPage_page"
import publisharticle_page from "../pages/publisharticle_page"

Before({ tags: "@beforecreatearticle" }, () => {

    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com","123456")

    adminPage_page.goToEditOrDeleteArticle()

    publisharticle_page.deleteTestArticle()

    publisharticle_page.goToAdminPage()

    adminPage_page.goToPublishArticle()
})

When("I fill the fields to create an article", () => {
    publisharticle_page.fillingArticleFields()
})

When("I forgot to fill one of the fields {string}", (field) => {
    publisharticle_page.clearArticleField(field)
})

When("I click to publish article", () => {
    publisharticle_page.clickPublishArticle()
})

Then("I see the message of article creation {string}", (message) => {
    publisharticle_page.checkArticleCreationMessage(message)
})

Then("I can see the created article", () => {
    publisharticle_page.checkCreatedArticle()
})

Then("I can see that the article was not created", () => {
    publisharticle_page.goToArticlePage()
    publisharticle_page.checkArticleNotCreated()
})

When("I click to cancel the article publishing", () => {
    publisharticle_page.cancelArticlePublishing()
})