@editWaterPage
Feature: Edit Water Session Page
    As an administrator
    I want to change the text of water session

    Scenario: Successfully editing Water Session Text
        When I edit the water session
        Then I click to save the water session edition
        And I see the the edited water session
    

    Scenario: editing Water Session Text but canceling it
        When I edit the water session
        Then I click to cancel the water session edition
        And I dont see the the edited water session


