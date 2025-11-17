import 'cypress-file-upload';
import { candidate } from '../../pages/Recruitment/Candidate';

describe('Pruebas en Recruitment', () =>{
    beforeEach(() =>{
            cy.login();
            cy.redirectTo('recruitment/viewCandidates');
        }
    );
    
    it('Agregar Candidato', ()=>{
        cy.fixture('candidate').then((candidateData) => {
           candidate.addCandidate(candidateData)
        });
    });
})