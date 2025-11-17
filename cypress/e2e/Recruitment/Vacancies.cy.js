import 'cypress-file-upload';
import { vacancies } from '../../pages/Recruitment/Vacancies';

describe('Pruebas en Recruitment', () =>{
    beforeEach( () =>{
            cy.login();
            cy.redirectTo('recruitment/viewCandidates');
        }
    ),

    it('Agregar Vacante', ()=>{
        cy.fixture('vacancies').then((vacancy) => {
            vacancies.addVacancy(vacancy)
        });
    });

})