@beforeAddVideo
Feature: Add Video
    As an administrator
    I want to add a new video to the website

    Scenario: Successfully adding a new video
        When I fill the necessary video fields
        And I click to post the video
        Then I see the video creation message "Vídeo criado com sucesso!"
        And I see the video in the list
        And I can check the video details
    

    Scenario Outline: Adding a new video with a missing required field
         When I try to add a new video with missing field "<field>"
         Then I see the video creation message "É necessário preencher o título e o código do vídeo para publicar"
        And I dont see the video in the list

        Examples:
            | field            |
            | video name       |
            | video code       |

    #  Scenario Outline: Adding a new video with an invalid video link
    #      When I try to add a new video with a invalid video link
    #      Then I see the video creation message "Preencha todos os campos obrigatórios antes de continuar"
    #      And I dont see the video in the list

    
    Scenario: Adding a new video correctly and canceling it 
        When I fill the necessary video fields
        And I click to cancel the video creation
        And I dont see the video in the list
