
@beforecreatearticle
Feature: Manage Articles
    As an administrator
    I want to create and pubish an article

    Scenario: Successfuly creating an article
        When I fill the fields to create an article
        And I click to publish article
        Then I see the message of article creation "Artigo criado com sucesso!"
        Then I can see the created article
    

    Scenario: Successfuly creating an article
        When I fill the fields to create an article
        And I forgot to fill one of the fields "<field>"
        Then I click to publish article
        Then I see the message of article creation "É necessário adicionar um título e ao menos um pouco de texto para publicar um artigo"
        And I can see that the article was not created

        Examples:
            |field|
            |articleName|
            |articleText|

    Scenario: Filling the article creation fields but canceling it
        When I fill the fields to create an article
        And I click to cancel the article publishing
        Then I can see that the article was not created
    

