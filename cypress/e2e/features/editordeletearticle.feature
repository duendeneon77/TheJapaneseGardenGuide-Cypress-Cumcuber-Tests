@beforeEditOrDeleteArticles
Feature: Manage Articles
    As an administrator
    I want to manage articles (edit or delete)
    So that I can keep the articles up to date

    Scenario: Successfully editing an article
        When I edit the article information
        And I click to save the article changes
        Then I see the article update message "Artigo atualizado com sucesso!"
        And I can view the updated article details

    Scenario Outline: Editing an article with a missing required field

        When I edit the article without required fields "<field>"
        Then I see the article update message "É necessário preencher o título e o texto do artigo para salvar"
        And the article details remain unchanged

        Examples:
            | field        |
            | articleTitle |
            | articleText  |

    Scenario: Cancelling article editing

        When I edit the article information
        And I cancel the article editing
        Then the article details remain unchanged

    Scenario: Successfully deleting an article
        When I click to delete the article
        And I confirm the article deletion
        Then I see the article update message "Artigo deletado com sucesso!"
        And the article should no longer exist

    Scenario: Cancelling article deletion
        When I click to delete the article
        And I cancel the article deletion
        Then the article should still exist