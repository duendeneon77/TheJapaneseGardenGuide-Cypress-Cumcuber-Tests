@editWaterPage
Feature: Edit Water Session Page
    As an administrator
    I want to change the text of the Water Session

    Scenario: Successfully editing the Water Session text
        When I edit the water session
        Then I click to save the water session edition
        And I see the the edited water session
    

    Scenario: Editing the Water Session text but canceling it
        When I edit the water session
        Then I click to cancel the water session edition
        And I dont see the edited water session


