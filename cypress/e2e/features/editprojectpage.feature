@editProjectPage
Feature: Edit Project Page
    As an administrator
    I want to change the text of the Project Page

    Scenario: Successfully edit the Project Page text
        When I edit the Project Page
        Then I click to save the project page edition
        And I see the the edited project page
    

    Scenario: editing Project Page Text but canceling it
        When I edit the Project Page
        Then I click to cancel the project page edition
        And I dont see the edited project page

