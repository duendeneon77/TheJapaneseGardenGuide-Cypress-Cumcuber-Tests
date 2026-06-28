@editRocksPage
Feature: Edit Rocks Session Page
    As an administrator
    I want to change the text of the Rocks Session

    Scenario: Successfully editing the Rocks Session text
        When I edit the rocks session
        Then I click to save the rocks session edition
        And I see the the edited rocks session
    

    Scenario: Editing the Rocks Session text but canceling it
        When I edit the rocks session
        Then I click to cancel the rocks session edition
        And I dont see the edited rocks session

