
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
}

export const candidate = new Candidate();