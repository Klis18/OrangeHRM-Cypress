import 'cypress-file-upload';

describe('Pruebas en Recruitment', () =>{
    beforeEach( () =>{
        cy.login();
        cy.contains('a', 'Recruitment').click();
    }
    ),
    it('Agregar Candidato', ()=>{
        cy.contains('button','Add').click();
        cy.get('.orangehrm-firstname',{timeout:5000});
        cy.get('.orangehrm-firstname').type('Elisa');
        cy.get('.orangehrm-middlename').type('Beatriz');
        cy.get('.orangehrm-lastname').type('Zambrano');
        cy.get('.oxd-select-wrapper').click()
        cy.get('.oxd-select-wrapper').contains('Junior Account Assistant').click();
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('prueba@email.com');
        cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0998786785');
        cy.fixture('docprueba.pdf', null).as('myFixture');
        cy.get('.oxd-file-input').selectFile('@myFixture',{force : true});
        cy.get('.orangehrm-save-candidate-page-full-width > .oxd-input-group > :nth-child(2) > .oxd-input').type('tag1,tag2,tag3');
        cy.get('.oxd-date-input > .oxd-input').clear().type('2025-12-05');
        cy.get('.oxd-textarea').type('Esta es una nota de prueba');
        cy.get('.oxd-checkbox-input').click();
        cy.get('button[type="submit"]').click();
    })
})