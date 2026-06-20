@addspecies
Feature: Add Species
    As an administrator
    I want to add a new species to the website
    So that visitors can view information about it

    Scenario: Successfully adding a new specie
        Given I am logged in as an administrator
        When I create a new species
        Then I see the species creation message "Espécie criada com sucesso!"
        And I see the specie in the list
        And I can view its details
    

    Scenario Outline: Adding a new specie with an empty required field
        Given I am logged in as an administrator
        When I create a new specie with missing field "<field>"
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I dont see the specie in the list

        Examples:
            | field            |
            | name             |
            | scientific name  |
            | main image       |
            | description      |


    Scenario Outline: Adding a new specie with unchecked required radio input
        Given I am logged in as an administrator
        When I create a new specie with unchecked input "<input>"
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I dont see the specie in the list

            Examples:
                | input       |
                | tamanho     |
                | crescimento |
                | tipo        |
            

    Scenario: Adding a new specie with unchecked Color Plant Input
        Given I am logged in as an administrator
        When I create a new specie with unchecked color input
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I dont see the specie in the list
    
    Scenario: Adding a new specie correctly and canceling it 
        Given I am logged in as an administrator
        When I create a new species to cancel
        And I click to cancel the species creation
        Then I return to admin menu page
        And I dont see the canceled adding in the list
