package com.sujayhomelab.k8s.empmanagement.controller;

import com.sujayhomelab.k8s.empmanagement.exception.ResourceNotFoundException;
import com.sujayhomelab.k8s.empmanagement.model.Candidate;
import com.sujayhomelab.k8s.empmanagement.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    // get all candidates
    @GetMapping("/candidates")
    public List < Candidate > getAllCandidates() {
        return candidateRepository.findAll();
    }

    // create candidate rest api
    @PostMapping("/candidates")
    public Candidate createCandidate(@RequestBody Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    // get candidate by id rest api
    @GetMapping("/candidates/{id}")
    public ResponseEntity < Candidate > getCandidateById(@PathVariable Long id) {
        //Candidate candidate = candidateRepository.findById(id).orElseThrow(() -c> new ResourceNotFoundException("Candidate not exist with id :" + id));
        Candidate candidate = candidateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :" + id));
        return ResponseEntity.ok(candidate);
    }

    // update candidate rest api

    @PutMapping("/candidates/{id}")
    public ResponseEntity < Candidate > updateCandidate(@PathVariable Long id, @RequestBody Candidate candidateDetails) {
        Candidate candidate = candidateRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :" + id));
        candidate.setFirstName(candidateDetails.getFirstName());
        candidate.setLastName(candidateDetails.getLastName());
        candidate.setEmailId(candidateDetails.getEmailId());
        candidate.setPhoneNumber(candidateDetails.getPhoneNumber());
        candidate.setNotes(candidateDetails.getNotes());
        candidate.setAddInfo(candidateDetails.getAddInfo());

        Candidate updatedCandidate = candidateRepository.save(candidate);
        return ResponseEntity.ok(updatedCandidate);
    }

    // delete candidate rest api
    @DeleteMapping("/candidates/{id}")
    public ResponseEntity < Map < String, Boolean >> deleteCandidate(@PathVariable Long id) {
        Candidate candidate = candidateRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :" + id));
        candidateRepository.delete(candidate);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}