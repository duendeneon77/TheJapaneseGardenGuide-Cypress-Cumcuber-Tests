@editToroPage
Feature: Edit Toro Session Page
    As an administrator
    I want to change the text of the Toro Session

    Scenario: Successfully editing the Toro Session text
        When I edit the toro session
        Then I click to save the toro session edition
        And I see the the edited toro session
    

    Scenario: Editing the Toro Session text but canceling it
        When I edit the toro session
        Then I click to cancel the toro session edition
        And I dont see the edited toro session

