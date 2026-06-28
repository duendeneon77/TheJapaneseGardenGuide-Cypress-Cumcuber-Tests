import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor"

import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import adminPage_page from "../pages/adminPage_page"
import publisharticle_page from "../pages/publisharticle_page"
import articles_page from "../pages/articles_page"
import article_page from "../pages/article_page"
import editordeletearticles_page from "../pages/editordeletearticles_page"

Before({ tags: "@beforeEditOrDeleteArticles" }, () => {

    home_page.accessLogin()
    login_page.fillFieldsAndClickToLogin("admin@email.com", "123456")

    adminPage_page.goToEditOrDeleteArticle()

    editordeletearticles_page.deleteTestArticle("Test Article")
    editordeletearticles_page.deleteTestArticle("Edited Test Article")

    editordeletearticles_page.goToAdminMenu()

    adminPage_page.goToPublishArticle()

    publisharticle_page.fillingArticleFields()
    publisharticle_page.clickPublishArticle()
    publisharticle_page.checkArticleCreationMessage("Artigo criado com sucesso!")

    articles_page.goToAdminMenu()

    adminPage_page.goToEditOrDeleteArticle()

    editordeletearticles_page.searchArticleAndClick("Test Article")
})

When("I edit the article information", () => {

    editordeletearticles_page.editingArticleTitle("Edited Test Article")
    editordeletearticles_page.editingArticleImage("/testImages/editedarticleimage.png")
    editordeletearticles_page.editingArticleText(`
        Edited Paragraph
        
        Edited Paragraph 2
        
        Edited Paragraph 3
    `)
})

When("I click to save the article changes", () => {
    editordeletearticles_page.clickToSaveEdit()
})

Then("I see the article update message {string}", (message) => {
    editordeletearticles_page.dealingWithEditionMessage(message)
})

Then("I can view the updated article details", () => {

    editordeletearticles_page.goToArticlesPage()

    articles_page.goToArticlePage("Edited Test Article")

    article_page.checkArticleTitle("Edited Test Article")
    article_page.checkArticleImage("Edited Test Article")
    article_page.checkArticleP("Edited Paragraph")
    article_page.checkArticleP("Edited Paragraph 2")
    article_page.checkArticleP("Edited Paragraph 3")
})

When("I click to delete the article", () => {
    editordeletearticles_page.clickToDeleteArticle()
})

When("I confirm the article deletion", () => {
    editordeletearticles_page.confirmArticleDeletion()
})

Then("the article should no longer exist", () => {
    editordeletearticles_page.goToArticlesPage()
    articles_page.articleShallNotExist("Test Article")
})

When("I edit the article without required fields {string}", (field) => {
    editordeletearticles_page.clearArticlesRequiredFields(field)
    editordeletearticles_page.clickToSaveEdit()
})

Then("the article details remain unchanged", () => {

    editordeletearticles_page.goToArticlesPage()

    articles_page.goToArticlePage("Test Article")

    article_page.checkArticleTitle("Test Article")
    article_page.checkArticleImage("Test Article")
    article_page.checkArticleP("Paragraph test")
    article_page.checkArticleP("Paragraph test 2")
    article_page.checkArticleP("Paragraph test 3")
})

Then("I cancel the article editing", () => {
    editordeletearticles_page.clickToCancelArticleEdition()
})

Then("I cancel the article deletion", () => {
    editordeletearticles_page.clickToCancelArticleDelection()
})

Then("the article should still exist", () => {
    editordeletearticles_page.goToArticlesPage()
    articles_page.goToArticlePage("Test Article")
})