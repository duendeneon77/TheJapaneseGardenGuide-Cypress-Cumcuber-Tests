@addspecies
Feature: Add Species
    As an administrator
    I want to add a new species to the website
    So that visitors can view information about it

    Scenario: Successfully adding a new species
        Given I am logged in as an administrator
        When I create a new species
        Then I see the species creation message "Espécie criada com sucesso!"
        And I see the species in the list
        And I can view its details

    Scenario Outline: Adding a new species with an empty required field
        Given I am logged in as an administrator
        When I create a new species with the "<field>" field left empty
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I don't see the species in the list

        Examples:
            | field            |
            | name             |
            | scientific name  |
            | main image       |
            | description      |

    Scenario Outline: Adding a new species with an unchecked required radio input
        Given I am logged in as an administrator
        When I create a new species with the "<input>" option left unselected
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I don't see the species in the list

        Examples:
            | input        |
            | tamanho      |
            | crescimento  |
            | tipo         |

    Scenario: Adding a new species without selecting a plant color
        Given I am logged in as an administrator
        When I create a new species without selecting a plant color
        Then I see the species creation message "Preencha todos os campos obrigatórios antes de continuar"
        And I don't see the species in the list

    Scenario: Creating a new species and canceling the creation
        Given I am logged in as an administrator
        When I create a new species to cancel
        And I click to cancel the species creation
        Then I return to the admin menu page
        And I don't see the canceled species in the list

