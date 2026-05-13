import { userManagement } from '../../../pages/Admin/UserManagement/Users';

describe('Admin Module tests', () => {
  beforeEach( () =>{
    cy.login();
    cy.redirectTo('admin/viewSystemUsers');
  }
),
  it('Add User', () => {   
    cy.fixture('user').then((userData) => {
      userManagement.addUser(userData);
    })
  }),

  it('Edit User', () => {
    cy.fixture('user').then((userData) => {
      userManagement.editUser(userData);
    })
  }),

  it('Delete User', () =>{
    userManagement.deleteUser();
  })
});
