package com.sujayhomelab.k8s.empmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sujayhomelab.k8s.empmanagement.model.Candidate;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long>{
}



