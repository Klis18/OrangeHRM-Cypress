import { jobTitles } from "../../../pages/Admin/Jobs/JobTitles";

describe('Tests in the Jobs Submodule Job Titles Option', () => {

    beforeEach(function() {
        cy.fixture('jobTitle').as('jobTitleData');
        cy.login();
        cy.redirectTo('admin/viewJobTitleList');
    });

    it('Add Job Title', function() {
        jobTitles.add();
        cy.wait(200);
        jobTitles.jobTitleForm(this.jobTitleData);
        jobTitles.submit();
    });

    
    it('Edit Job Title', function() {
        jobTitles.edit();
        cy.wait(200);
        jobTitles.jobTitleForm(this.jobTitleData);
        jobTitles.submit();
    });

    it('Delete Job Title', function(){
        jobTitles.delete();
        cy.wait(2000);
        jobTitles.confirmDelete();
    });
})