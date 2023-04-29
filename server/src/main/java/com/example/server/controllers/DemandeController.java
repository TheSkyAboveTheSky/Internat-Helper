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

public class DemandeController {
    @Autowired
    private DemandeService demandeService;
    @RequestMapping("/demandes")
    public List<Demande>getDemandes(){
        return  demandeService.getDemandes();
    }
    @RequestMapping("/demande/{id}")
    public Demande getDemande(@PathVariable long id) {
        return demandeService.getDemande(id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/demande/{id}")
    public void deleteDemande(@PathVariable long id){
        demandeService.deleteDemande(id);
    }
    @RequestMapping(method = RequestMethod.POST,  value="/demandes")
    public void addDemande(@RequestBody Demande demande){
        demandeService.addDemande(demande);

    }
    @RequestMapping(method = RequestMethod.PUT,value="/demande/{id}")
    public void updateDemande(@RequestBody Demande demande,@PathVariable long id){
        demandeService.updateDemande(demande,id);
    }
}

