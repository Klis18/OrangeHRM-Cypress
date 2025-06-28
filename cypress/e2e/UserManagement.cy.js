import { v4 as uuidv4 } from 'uuid';

describe('Pruebas Módulo Admin', () => {
  let user;
  beforeEach( () =>{
    cy.login();
    cy.contains('a', 'Admin').click();
    cy.fixture('user').then((data)=> user = data);
  }
),
it('Agregar Usuario', () => {    
    let cantidadRegistros, cantidadRegistrosActualizados;
    const userId = uuidv4().slice(0,4);
    cy.get('.oxd-table-card').its('length').then(
      (cantidad) => cantidadRegistros = cantidad
    );
    cy.contains('button', 'Add').click();
    cy.get('.oxd-select-wrapper .oxd-select-text').eq(0).click();
    cy.get('.oxd-select-dropdown').contains('ESS').click();
    cy.get('.oxd-autocomplete-text-input').type('A');
    cy.get('.oxd-autocomplete-dropdown',{timeout:5000});
    cy.get('.oxd-autocomplete-dropdown').should('be.visible')                  
    .find('span')                          
    .first()
    .click();
    cy.get('.oxd-select-wrapper .oxd-select-text').eq(1).click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click();
    cy.get('.oxd-input').eq(1).type(user.userName+userId);
    cy.get('input[type="password"]').eq(0).type(user.password);
    cy.get('input[type="password"]').eq(1).type(user.password);
    cy.contains('button[type="submit"]', 'Save').click();
    cy.get('.oxd-table-card',{timeout:8000});
    cy.get('.oxd-table-card').its('length').then(
      (cantidad) => {
        cantidadRegistrosActualizados = cantidad;
        expect(cantidadRegistrosActualizados).to.be.greaterThan(cantidadRegistros)
      }
    );
  }),

  it('Editar Usuario', ()=>{
    cy.get('.bi-pencil-fill').eq(0).click();
    cy.get('input[placeholder="Type for hints..."]').type('{selectall}{backspace}').type('A');
    cy.get('.oxd-autocomplete-dropdown',{timeout:7000});
    cy.get('.oxd-autocomplete-dropdown') .should('be.visible')                  
    .find('span')                          
    .first()
    .click();
    cy.get('.oxd-input').eq(1).type('{selectall}{backspace}').type(user.userName); 
    cy.contains('button[type="submit"]', 'Save').click();
  }),

  it('Eliminar usuario', () =>{
    let cantidadRegistrosActuales, cantidadRegistrosActualizados;
    cy.get('.oxd-table-card').its('length').then(
      (cantidad) => cantidadRegistrosActuales = cantidad
    );
    cy.get('.bi-trash').eq(1).click();
    cy.get('.oxd-button--label-danger',{timeout:7000});
    cy.get('.oxd-button--label-danger').should('be.visible').click();
    cy.get('.oxd-table-card',{timeout:8000});
    cy.get('.oxd-table-card').its('length').then(
      (cantidad) => {
        cantidadRegistrosActualizados = cantidad;
        expect(cantidadRegistrosActualizados).to.be.lessThan(cantidadRegistrosActuales)
      }
    );

    cy.get('.oxd-userdropdown-icon').click();
    cy.contains('a', 'Logout').click();
  })
});
