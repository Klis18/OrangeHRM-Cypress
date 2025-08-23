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
        // cy.get('.oxd-file-input-div').contains('archivoprueba');

    })
})