
import { randomString } from '../../support/commands';

class Vacancies{

    addVacancy(vacancy){
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
    }
}
export const vacancies = new Vacancies();