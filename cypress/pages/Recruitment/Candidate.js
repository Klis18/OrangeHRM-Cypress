
class Candidate{

    candidatesElements = {
        firstNameInput:      () => cy.get('.orangehrm-firstname'),
        middleNameInput:     () => cy.get('.orangehrm-middlename'),
        lastNameInput:       () => cy.get('.orangehrm-lastname'),
        wrapper:             () => cy.get('.oxd-select-wrapper'),
        emailInput:          () => cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        contactNumberInput:  () => cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        resumeFileInput:     () => cy.get('.oxd-file-input'),
        keywordsInput:       () => cy.get('input[placeholder="Enter comma seperated words..."]'),
        dateApplicationInput:() => cy.get('.oxd-date-input > .oxd-input'),
        notesInput:          () => cy.get('.oxd-textarea'),
        consentCheckbox:     () => cy.get('.oxd-checkbox-input'),
        submitButton:        () => cy.get('button[type="submit"]'),
        candidateNameSearch: () => cy.get('input[placeholder="Type for hints..."]'),
        addButton:           () => cy.contains('button','Add'),
        editButton:          () => cy.get('button>i.oxd-icon.bi-eye-fill'),
        deleteButton:        () => cy.get('button>i.oxd-icon.bi-trash'),
        confirmButton:       () => cy.get('button').contains('Yes'),
        searchButton:        () => cy.get('button').contains('Search'),
        editSwitchInput:     () => cy.get('.oxd-switch-input'),
        autocomplete:        () => cy.get('.oxd-autocomplete-dropdown')
    }

    add(){
        this.candidatesElements.addButton().click();
    }

    edit(){
        this.candidatesElements.editButton().first().click();
    }

    activateEdit(){
        this.candidatesElements.editSwitchInput().click();
    }

    delete(){
        this.candidatesElements.deleteButton().first().click();
    }

    confirmDelete(){
        this.candidatesElements.confirmButton().click();
    }

    save(){
        this.candidatesElements.submitButton().click();
    }

    search(){
        this.candidatesElements.searchButton().click();
    }

    candidateForm(candidate){
        this.candidatesElements.firstNameInput().type('{selectall}{backspace}').type(candidate.firstName);
        this.candidatesElements.middleNameInput().type('{selectall}{backspace}').type(candidate.middleName);
        this.candidatesElements.lastNameInput().type('{selectall}{backspace}').type(candidate.lastName);
        this.candidatesElements.wrapper().click();
        this.candidatesElements.wrapper().contains(candidate.vacancy).click();
        this.candidatesElements.emailInput().type('{selectall}{backspace}').type(candidate.email);
        this.candidatesElements.contactNumberInput().type('{selectall}{backspace}').type(candidate.contactNumber);
        cy.fixture(candidate.resume, null).as('myFixture');
        this.candidatesElements.resumeFileInput().selectFile('@myFixture',{force:true});
        this.candidatesElements.keywordsInput().type('{selectall}{backspace}').type(candidate.keywords);
        this.candidatesElements.dateApplicationInput().clear().type(candidate.dateApplication);
        this.candidatesElements.notesInput().type(candidate.notes);
        this.candidatesElements.consentCheckbox().click();    
    }

    candidateFilterByName(candidateName){
        this.candidatesElements.candidateNameSearch().type(candidateName);
        this.candidatesElements.autocomplete().should('be.visible').find('span').first().click();
    }


    // searchCandidate(candidateName){
    //     cy.get('input[placeholder="Type for hints..."]').type(candidateName);
    //     cy.get('.oxd-autocomplete-dropdown',{timeout:7000});
    //     cy.get('.oxd-autocomplete-dropdown').should('be.visible')                  
    //     .find('span')                          
    //     .first()
    //     .click();
    //     cy.get('button').contains('Search').click();
    // }


    // deleteCandidate(){
    //     cy.get('button>i.oxd-icon.bi-trash').click();
    //     cy.get('button').contains('Yes').click();
    // }
}

export const candidate = new Candidate();