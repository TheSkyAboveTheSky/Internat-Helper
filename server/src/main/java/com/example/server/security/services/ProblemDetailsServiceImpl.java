package com.example.server.security.services;

import com.example.server.models.Problem;
import com.example.server.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProblemDetailsServiceImpl implements UserDetailsService {
    @Autowired
    ProblemRepository problemRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        Problem problem = problemRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with Id: " + id));

        return ProblemDetailsImpl.build(problem);
    }

}