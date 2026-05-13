import 'cypress-file-upload';
import { vacancies } from '../../pages/Recruitment/Vacancies';

describe('Tests in Recruitment Submodule Vacancies Option', () =>{
    beforeEach( () =>{
            cy.login();
            cy.redirectTo('recruitment/viewCandidates');
        }
    ),

    it('Add Vacancy', ()=>{
        cy.fixture('vacancies').then((vacancy) => {
            vacancies.addVacancy(vacancy)
        });
    });

})