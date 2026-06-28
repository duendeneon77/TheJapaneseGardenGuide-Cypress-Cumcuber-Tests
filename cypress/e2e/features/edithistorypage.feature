@editHistoryPage
Feature: Edit History Page
    As an administrator
    I want to change the text of the History Page

    Scenario: Successfully editing History Page Text
        When I edit the historyPage
        Then I click to save the story page edition
        And I see the the edited history page
    

    Scenario: editing History Page Text but canceling it
        When I edit the historyPage
        Then I click to cancel the history page edition
        And I dont see the edited history page


