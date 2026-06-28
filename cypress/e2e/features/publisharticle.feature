@beforecreatearticle
Feature: Publish Articles
    As an administrator
    I want to create and publish articles

    Scenario: Successfully creating an article
        When I fill the fields to create an article
        And I click to publish article
        Then I see the message of article creation "Artigo criado com sucesso!"
        And I can see the created article

    Scenario Outline: Creating an article with missing required field

        When I fill the fields to create an article
        And I forgot to fill one of the fields "<field>"
        And I click to publish article
        Then I see the message of article creation "É necessário adicionar um título e ao menos um pouco de texto para publicar um artigo"
        And I can see that the article was not created

        Examples:
            | field        |
            | articleName  |
            | articleText  |

    Scenario: Creating an article but cancelling it
        When I fill the fields to create an article
        And I click to cancel the article publishing
        Then I can see that the article was not created