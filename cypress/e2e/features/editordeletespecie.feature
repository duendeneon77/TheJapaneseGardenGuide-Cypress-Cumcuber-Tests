@editOrDeleteSpecies
Feature: Manage Species
    As an administrator
    I want to manage species (edit or delete)
    So that I can keep the information up to date


    Scenario: Successfully editing a species
        When I edit the species information
        And I click to save the species edition
        Then I see the species update message "Espécie atualizada com sucesso!"
        And I can view the updated species details


    Scenario Outline: Editing a species with missing required field
        When I edit the species with missing field "<field>"
        Then I see the species update message "Título e nome científico são obrigatórios"
        And the species details remain unchanged

        Examples:
            | field           |
            | titulo          |
            | nomeCientifico  |


    Scenario: Cancelling species edit
        When I edit the species information
        And I cancel the species edition
        Then the species details remain unchanged


    Scenario: Successfully deleting a species
        When I click to delete the species
        And I confirm the species deletion
        Then the species should no longer exist


    @deleteCanceledDeleteSpecie
    Scenario: Cancelling species deletion
        When I click to delete the species
        Then I cancel the species deletion
        And the species should still exist