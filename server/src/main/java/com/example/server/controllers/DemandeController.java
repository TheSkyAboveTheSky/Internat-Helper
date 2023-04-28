package com.example.server.controllers;

import com.example.server.models.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.server.services.DemandeService;

import java.util.List;

@RestController
@RequestMapping("/demandes")
public class DemandeController {
    @Autowired
    private DemandeService demandeService;
    @GetMapping("")
    public ResponseEntity<List<Demande>> getDemandes(){
        return new ResponseEntity<>( demandeService.getDemandes(), HttpStatus.OK);



    }
    @RequestMapping("/demande/{id}")
    public Demande getDemande(@PathVariable long id) {
        return demandeService.getDemande(id);
    }
}

