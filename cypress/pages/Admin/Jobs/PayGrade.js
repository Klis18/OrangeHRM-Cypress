class PayGrade{

    payGradeElements = {
        addButton: () => cy.get('button').contains('Add').click(),
        nameInput: () => cy.get('.oxd-input').eq(1),
        saveButton: () => cy.get('button').contains('Save'),
        currencySelect: () => cy.get('.oxd-select-text').click(),
        currencyDropdown: () => cy.get('.oxd-select-dropdown'),
        minSalaryInput: () =>cy.get('.oxd-input').eq(2),
        maxSalaryInput: () => cy.get('.oxd-input').eq(3)
    }

    add(){
        this.payGradeElements.addButton();
    }

    payGradeForm(payGradeData){
        this.payGradeElements.nameInput().type(payGradeData.name);
        this.payGradeElements.saveButton().click();
    }

    currencyForm(payGradeData){
        this.payGradeElements.currencySelect();
        this.payGradeElements.currencyDropdown().contains(payGradeData.currency).click();
        this.payGradeElements.minSalaryInput().type(payGradeData.minSalary);
        this.payGradeElements.maxSalaryInput().type(payGradeData.maxSalary);
        cy.contains('h6', 'Add Currency')
        .closest('.orangehrm-card-container')
        .contains('button', 'Save')
        .click()
    }
}
export const payGrade = new PayGrade()