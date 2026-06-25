
@beforeEditOrDeleteArticles
Feature: Manage Species
    As an administrator
    I want to manage articles (edit or delete)
    So that I can keep the articles up to date

    Scenario: Successfully editing an article
        When I edit the article information
        And I click to save the article edition
        Then I see the article update message "Artigo atualizado com sucesso!"
        And I can view the updated article details

     Scenario Outline: Editing an article with missing required field

         When I edit the aricle without required fields "<field>"
         Then I see the species update message "É necessário preencher o título e o texto do artigo para salvar"
         And the article details remain unchanged

         Examples:
             |field|
             |articleTitle|
             |articleText|

    
     Scenario: Cancelling species edit
        
         When I edit the article information
         Then I decide to cancel the article edition
         Then the article details remain unchanged


    Scenario: Successfully deleting an article
        When I click to delete the article
        And I decide to confirm the article deletion
        Then I see the article update message "Artigo deletado com sucesso!"
        And the article shall no longer exist

        
    Scenario: Cancelling article deletion
        When I click to delete the article
        Then I decide to cancel the article deletion
        And the article shall still exist
