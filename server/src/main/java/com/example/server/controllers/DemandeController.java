package com.example.server.controllers;

import com.example.server.models.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.server.services.DemandeService;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/demandes")
public class DemandeController {
    @Autowired
    private DemandeService demandeService;
    @GetMapping("")
    public ResponseEntity<List<Demande>> allAccess(){
        return new ResponseEntity<>( demandeService.getDemandes(), HttpStatus.OK);



    }
    @RequestMapping("/demande/{id}")
    public Demande getDemande(@PathVariable long id) {
        return demandeService.getDemande(id);
    }
}

