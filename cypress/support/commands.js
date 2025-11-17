Cypress.Commands.add('login', () =>{
    cy.session('login',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();   
    })
});

Cypress.Commands.add('redirectTo', (option) => {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/${option}`)
})

Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown-icon').click();
    cy.contains('a', 'Logout').click();
})

export function randomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}