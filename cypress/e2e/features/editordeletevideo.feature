@editOrDeleteVideo
Feature: Manage Videos
    As an administrator
    I want to manage videos (edit or delete)

    Scenario: Successfully editing a video
        When I edit the video information
        And I click to save the video edition
        Then I see the video update message "Vídeo atualizado com sucesso!"
        And I can view the updated video details

    Scenario Outline: Editing a video with missing required field

        When I edit the video without required fields "<field>"
        Then I see the video update message "É necessário preencher o título e o código do vídeo antes de salvar"
        And the video details remain unchanged

        Examples:
            |field|
            |video title|
            |video code|

    
    Scenario: Cancelling video edit
        
        When I edit the video information
        Then I decide to cancel the video edition
        Then the video details remain unchanged


    Scenario: Successfully deleting a video
        When I click to delete the video
        And I confirm the video deletion
        Then I see the video update message "Vídeo deletado com sucesso!"
        And the video shall no longer exist

        @editOrDeleteVideoAfter
    Scenario: Cancelling the video deletion
        When I click to delete the video
        Then I decide to cancel the video deletion
        And the video shall still exist
