describe('Pruebas Módulo Admin', () => {
  beforeEach( () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click();
    }
  ),
  it('Agregar Usuario', () => {
    cy.contains('a', 'Admin').click();
    cy.contains('button', 'Add').click();
    cy.get('.oxd-select-wrapper .oxd-select-text').eq(0).click();
    cy.get('.oxd-select-dropdown').contains('ESS').click();
    cy.get('.oxd-autocomplete-text-input').type('A');
    cy.get('.oxd-autocomplete-dropdown',{timeout:5000});
    cy.get('.oxd-autocomplete-dropdown').contains('Ranga').click();
    cy.get('.oxd-select-wrapper .oxd-select-text').eq(1).click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click();
    cy.get('.oxd-input').eq(1).type('Ranga2');
    cy.get('input[type="password"]').eq(0).type('RANga-123');
    cy.get('input[type="password"]').eq(1).type('RANga-123');
    cy.contains('button[type="submit"]', 'Save').click();
  })
});
