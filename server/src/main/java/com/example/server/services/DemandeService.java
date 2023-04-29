package com.example.server.services;

import com.example.server.models.Demande;
import com.example.server.repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DemandeService {
    @Autowired
    private DemandeRepository demandeRepository;


    public List<Demande> getDemandes(){
        List<Demande> demandes = new ArrayList<>();
        demandeRepository.findAll().forEach(demande -> {
            demandes.add(demande);
        });
        return demandes;
    }

    public Demande getDemande(long id) {
        return demandeRepository.findById(id).orElse(null);
    }


    public void deleteDemande(long id) {
        demandeRepository.deleteById(id);
    }

    public void addDemande(Demande demande) {
        demandeRepository.save(demande);
    }

    public void updateDemande(Demande demande, long id) {
      demandeRepository.save(demande);
    }
}
