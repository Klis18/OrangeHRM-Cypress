
class JobTitles{

    jobTitleElements ={
        addButton: () => cy.get('button').contains('Add').click(),
        editButton: () => cy.get('button>i.oxd-icon.bi-pencil-fill'),
        deleteButton: () => cy.get('button>i.oxd-icon.bi-trash'),
        confirmDeleteButton: () => cy.get('button').contains('Yes, Delete').click(),
        jobTitleInput: () => cy.get(':nth-child(2) > .oxd-input'),
        jobTitleDescription: () => cy.get('textarea[placeholder="Type description here"]'),
        jobInputFile: () => cy.get('.oxd-file-input').selectFile('@myFixture',{force : true}),
        jobTitleNote: () => cy.get('textarea[placeholder="Add note"]'),
        saveButton: () => cy.get('button[type="submit"]').contains('Save').click()
    }

    add(){
        this.jobTitleElements.addButton();
    }

    edit(){
        this.jobTitleElements.editButton().first().click();
    }

    delete(){
        this.jobTitleElements.deleteButton().first().click();
    }

    confirmDelete(){
        this.jobTitleElements.confirmDeleteButton();
    }

    jobTitleForm(jobTitleData){
        this.jobTitleElements.jobTitleInput().clear().type(jobTitleData.jobTitle);
        this.jobTitleElements.jobTitleDescription().clear().type(jobTitleData.jobDescription);
        cy.fixture(jobTitleData.jobSpecification, null).as('myFixture');
        this.jobTitleElements.jobInputFile();
        this.jobTitleElements.jobTitleNote().clear().type(jobTitleData.note);
        this.jobTitleElements.saveButton();
    }

    submit(){
        this.jobTitleElements.saveButton();
    }


}

export const jobTitles = new JobTitles()