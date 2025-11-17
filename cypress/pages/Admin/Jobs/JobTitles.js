
class JobTitles{

    addJobTitle(jobTitleData){
        cy.get('button').contains('Add').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .oxd-input').type(jobTitleData.jobTitle);
        cy.get('textarea[placeholder="Type description here"]').type(jobTitleData.jobDescription);
        cy.fixture(jobTitleData.jobSpecification, null).as('myFixture');
        cy.get('.oxd-file-input').selectFile('@myFixture',{force : true});
        cy.get('textarea[placeholder="Add note"]').type(jobTitleData.note);
        cy.get('button[type="submit"]').contains('Save').click();
    }

}

export const jobTitles = new JobTitles()