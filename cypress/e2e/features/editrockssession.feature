@editRocksPage
Feature: Edit Rocks Session Page
    As an administrator
    I want to change the text of rocks session

    Scenario: Successfully editing Rocks Session Text
        When I edit the rocks session
        Then I click to save the rocks session edition
        And I see the the edited rocks session
    

    Scenario: editing Rocks Session Text but canceling it
        When I edit the rocks session
        Then I click to cancel the rocks session edition
        And I dont see the the edited rocks session

