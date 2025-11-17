import { userManagement } from '../../../pages/Admin/UserManagement/UserManagement';

describe('Pruebas Módulo Admin', () => {
  beforeEach( () =>{
    cy.login();
    cy.redirectTo('admin/viewSystemUsers');
  }
),
  it('Agregar Usuario', () => {   
    cy.fixture('user').then((userData) => {
      userManagement.addUser(userData);
    })
  }),

  it('Editar Usuario', () => {
    cy.fixture('user').then((userData) => {
      userManagement.editUser(userData);
    })
  }),

  it('Eliminar usuario', () =>{
    userManagement.deleteUser();
  })
});
