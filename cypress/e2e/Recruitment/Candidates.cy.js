import 'cypress-file-upload';
import { candidate } from '../../pages/Recruitment/Candidate';

describe('Pruebas en Recruitment', () =>{
    beforeEach(function() {
            cy.fixture('candidate').as('candidateData');
            cy.login();
            cy.redirectTo('recruitment/viewCandidates');
        }
    );
    
    it('Agregar Candidato', function(){
        candidate.add();
        cy.wait(200);
        candidate.candidateForm(this.candidateData.newCandidate);
        candidate.save();
    });

    it('Filtrar Candidato por Nombre', function(){
        candidate.candidateFilterByName(this.candidateData.newCandidate.firstName);
        candidate.search();
    });

    it('Editar Candidato', function(){
        candidate.edit();
        cy.wait(200);
        candidate.activateEdit();
        candidate.candidateForm(this.candidateData.editCandidate);
        candidate.save();
    });

    it('Eliminar Candidato', function(){
        candidate.delete();
        cy.wait(200);
        candidate.confirmDelete();
    });

})