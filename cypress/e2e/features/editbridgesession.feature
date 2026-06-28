@editBridgesPage
Feature: Edit Bridges Session Page
    As an administrator
    I want to change the text of the Bridges Session

    Scenario: Successfully editing the Bridges Session text
        When I edit the bridges session
        Then I click to save the bridges session edition
        And I see the the edited bridges session
    

    Scenario: Editing the Bridges Session text but canceling it
        When I edit the bridges session
        Then I click to cancel the bridges session edition
        And I dont see the edited bridges session

