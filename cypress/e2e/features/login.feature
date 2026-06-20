Feature: Login
    As an administrator
    I want to log in to the application
    So that I can edit and publish content on the website.



    Scenario: Login with all fields empty
        Given I am on login screen
        When I click on Login
        Then I see the login message "Preencha todos os campos"


    Scenario: Login with email field empty
        Given I am on login screen
        And I fill password "123456"
        When I click on Login
        Then I see the login message "Preencha todos os campos"


    Scenario: Login with password field empty
        Given I am on login screen
        And I fill e-mail "admin@email.com"
        When I click on Login
        Then I see the login message "Preencha todos os campos"

    Scenario: Login with an invalid email address"
        Given I am on login screen
        And I fill e-mail "invalid@email"
        And I fill password "123456"
        When I click on Login
        Then I see the login message "Digite um email válido"

    Scenario: Login with a password that is too short
        Given I am on login screen
        And I fill e-mail "admin@email.com"
        And I fill password "123"
        When I click on Login
        Then I see the login message "A senha deve possuir ao menos 6 caracteres"

    
    Scenario: Login with a non-existent user
        Given I am on login screen
        And I fill e-mail "nottheadmin@email.com"
        And I fill password "123456"
        When I click on Login
        Then I see the login message "Usuário ou senha incorretos"
    
    Scenario: Login successfully
        Given I am on login screen
        And I fill my credentials correctly "admin@email.com" "123456"
        When I click on Login
        Then I see the text "O que deseja fazer?"
