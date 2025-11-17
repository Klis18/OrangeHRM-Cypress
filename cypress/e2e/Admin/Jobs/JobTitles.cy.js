import { jobTitles } from "../../../pages/Admin/Jobs/JobTitles";

describe('Pruebas en Submódulo Jobs opción Jobs Titles', () => {

    beforeEach(() =>{
        cy.login();
        cy.redirectTo('admin/viewJobTitleList');
    });

    it('Agregar Título de Trabajo', () => {
        cy.fixture('jobTitle').then((jobTitleData) => {
            jobTitles.addJobTitle(jobTitleData);
        })
    });

    // it('Editar Título de Trabajo', () => {

    // });

    // it('Eliminar Título de Trabajo', () => {

    // });
})