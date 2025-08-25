import 'cypress-file-upload';
import { randomString } from '../support/commands';

describe('Pruebas en Recruitment', () =>{
    let candidate;
    let vacancy;
    beforeEach( () =>{
        cy.login();
        cy.contains('a', 'Recruitment').click();
        cy.fixture('candidate').then((data) => candidate = data);
        cy.fixture('vacancies').then((data) => vacancy = data);
    }
    ),
    it('Agregar Candidato', ()=>{
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
    });

    it('Agregar Vacante', ()=>{
        cy.get('.oxd-topbar-body-nav-tab-item').contains('Vacancies').click();
        cy.get('button').contains('Add').click();
        cy.get('.oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(vacancy.vacancyName + randomString(3));
        cy.get('.oxd-select-text').click();
        cy.contains(vacancy.jobTitle).click();
        cy.get('.oxd-textarea').type(vacancy.description);
        cy.get('.oxd-autocomplete-text-input > input').type(vacancy.hiringManager);
        cy.get('.oxd-autocomplete-dropdown',{timeout:4000}).should('be.visible')
        .find('span').first().click();
        cy.get('.oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(vacancy.numberPositions);
        cy.get(':nth-child(4) > .oxd-grid-item > .oxd-switch-wrapper > label > .oxd-switch-input').click();
        cy.get(':nth-child(6) > .oxd-grid-item > .oxd-switch-wrapper > label > .oxd-switch-input').click();
        cy.get('a').contains('https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.rss').should('be.visible');
        cy.get('a').contains('https://opensource-demo.orangehrmlive.com/web/index.php/recruitmentApply/jobs.html').should('be.visible');
        cy.contains('button[type="submit"]', 'Save').click();
        cy.get('.oxd-text',{timeout:5000}).contains('Edit Vacancy').should('be.visible');
    });

})