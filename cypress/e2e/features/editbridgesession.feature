@editBridgesPage
Feature: Edit Bridges Session Page
    As an administrator
    I want to change the text of bridges session

    Scenario: Successfully editing Bridges Session Text
        When I edit the bridges session
        Then I click to save the bridges session edition
        And I see the the edited bridges session
    

    Scenario: editing Bridges Session Text but canceling it
        When I edit the bridges session
        Then I click to cancel the bridges session edition
        And I dont see the the edited bridges session

