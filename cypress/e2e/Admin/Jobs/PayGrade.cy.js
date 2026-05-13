import { payGrade } from "../../../pages/Admin/Jobs/PayGrade";

describe('Tests in Jobs Suboption PayGrade Option' ,()=>{
    beforeEach( () =>{
            cy.login();
            cy.redirectTo('admin/viewPayGrades');
        }
    ),
    it('Add PayGrade', () =>{
        payGrade.add();
        cy.fixture('payGrade').then((payGradeData) =>{
            payGrade.payGradeForm(payGradeData);
            // payGrade.save();
            payGrade.add();
            payGrade.currencyForm(payGradeData);
            // payGrade.save();
        })
    })
})