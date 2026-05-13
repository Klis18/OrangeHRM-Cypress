import 'cypress-file-upload';
import { candidate } from '../../pages/Recruitment/Candidate';

describe('Tests in Recruitment Submodule Candidates Option', () =>{
    beforeEach(function() {
            cy.fixture('candidate').as('candidateData');
            cy.login();
            cy.redirectTo('recruitment/viewCandidates');
        }
    );
    
    it('Add Candidate', function(){
        candidate.add();
        cy.wait(200);
        candidate.candidateForm(this.candidateData.newCandidate);
        candidate.save();
    });

    it('Filter candidate by name', function(){
        candidate.candidateFilterByName(this.candidateData.newCandidate.firstName);
        candidate.search();
    });

    it('Edit Candidate', function(){
        candidate.edit();
        cy.wait(200);
        candidate.activateEdit();
        candidate.candidateForm(this.candidateData.editCandidate);
        candidate.save();
    });

    it('Delete Candidate', function(){
        candidate.delete();
        cy.wait(200);
        candidate.confirmDelete();
    });

})