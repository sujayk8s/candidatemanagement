import axios from 'axios';

const CANDIDATE_API_BASE_URL = "http://localhost:8080/api/v1/candidates";

class CandidateService {

    getCandidates(){
        return axios.get(CANDIDATE_API_BASE_URL);
    }

    createCandidate(candidate){
        return axios.post(CANDIDATE_API_BASE_URL, candidate);
    }

    getCandidateById(candidateId){
        return axios.get(CANDIDATE_API_BASE_URL + '/' + candidateId);
    }

    updateCandidate(candidate, candidateId){
        return axios.put(CANDIDATE_API_BASE_URL + '/' + candidateId, candidate);
    }

    deleteEmployee(candidateId){
        return axios.delete(CANDIDATE_API_BASE_URL + '/' + candidateId);
    }
}

export default new CandidateService()