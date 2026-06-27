@editToroPage
Feature: Edit Toro Session Page
    As an administrator
    I want to change the text of toro session

    Scenario: Successfully editing Toro Session Text
        When I edit the toro session
        Then I click to save the toro session edition
        And I see the the edited toro session
    

    Scenario: editing Toro Session Text but canceling it
        When I edit the toro session
        Then I click to cancel the toro session edition
        And I dont see the the edited toro session

