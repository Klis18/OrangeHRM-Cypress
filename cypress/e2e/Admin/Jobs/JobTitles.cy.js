import { jobTitles } from "../../../pages/Admin/Jobs/JobTitles";

describe('Pruebas en Submódulo Jobs opción Jobs Titles', () => {

    beforeEach(function() {
        cy.fixture('jobTitle').as('jobTitleData');
        cy.login();
        cy.redirectTo('admin/viewJobTitleList');
    });

    it('Agregar Título de Trabajo', function() {
        jobTitles.add();
        cy.wait(200);
        jobTitles.jobTitleForm(this.jobTitleData);
        jobTitles.submit();
    });

    
    it('Editar Título de Trabajo', function() {
        jobTitles.edit();
        cy.wait(200);
        jobTitles.jobTitleForm(this.jobTitleData);
        jobTitles.submit();
    });

    it('Eliminar Título de Trabajo', function(){
        jobTitles.delete();
        cy.wait(2000);
        jobTitles.confirmDelete();
    });
})