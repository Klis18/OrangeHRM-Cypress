
class Candidate{

    addCandidate(candidate){
        cy.contains('button','Add').click();
        cy.get('.orangehrm-firstname',{timeout:5000}).type(candidate.firstName);
        cy.get('.orangehrm-middlename').type(candidate.middleName);
        cy.get('.orangehrm-lastname').type(candidate.lastName);
        cy.get('.oxd-select-wrapper').click()
        cy.get('.oxd-select-wrapper').contains(candidate.vacancy).click();
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(candidate.email);
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(candidate.contactNumber);
        cy.fixture(candidate.resume, null).as('myFixture');
        cy.get('.oxd-file-input').selectFile('@myFixture',{force : true});
        cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input').type(candidate.keywords);
        cy.get('.oxd-date-input > .oxd-input').clear().type(candidate.dateApplication);
        cy.get('.oxd-textarea').type(candidate.notes);
        cy.get('.oxd-checkbox-input').click();
        cy.get('button[type="submit"]').click();
        cy.contains('Success',{timeout:5000}).should('be.visible');
    }

    searchCandidate(candidateName){
        cy.get('input[placeholder="Type for hints..."]').type(candidateName);
        cy.get('.oxd-autocomplete-dropdown',{timeout:7000});
        cy.get('.oxd-autocomplete-dropdown').should('be.visible')                  
        .find('span')                          
        .first()
        .click();
        cy.get('button').contains('Search').click();
    }

    editCandidate(){
        cy.get('button>i.oxd-icon.bi-eye-fill').click();
        cy.get('span.oxd-switch-input').click();
        cy.get('input[name="middleName"]').type('{selectall}{backspace}').type('Belinda');
        cy.get('button').contains('Save').click();
        cy.get('p.oxd-text').contains('Belinda').should('be.visible');
    }

    deleteCandidate(){
        cy.get('button>i.oxd-icon.bi-trash').click();
        cy.get('button').contains('Yes').click();
    }
}

export const candidate = new Candidate();