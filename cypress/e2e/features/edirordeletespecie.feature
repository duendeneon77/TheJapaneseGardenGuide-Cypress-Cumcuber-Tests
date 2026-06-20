
@editOrDeleteSpecies
Feature: Manage Species
    As an administrator
    I want to manage species (edit or delete)
    So that I can keep the information up to date

    Scenario: Successfully editing a species
        When I edit the species information
        And I click to save the edition
        Then I see the species update message "Espécie atualizada com sucesso!"
        And I can view the updated species details

    Scenario: Editing a species with missing required field

        When I edit the species without required fields "<field>"
        Then I see the species update message "Título e nome científico são obrigatórios"
        And the species details remain unchanged

        Examples:
            |field|
            |titulo|
            |nomeCientifico|

    
    Scenario: Cancelling species edit
        
        When I edit the species information
        Then I decide to cancel the edition
        Then the species details remain unchanged


    Scenario: Successfully deleting a species
        When I click to delete the specie
        And I decide to confirm the deletion
        And the species should no longer exist

        @deleteCanceledDeleteSpecie
        Scenario: Cancelling specie deletion
        When I click to delete the specie
        Then I decide to cancel the deletion
        And the species should still exist
