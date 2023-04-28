package com.example.server.services;

import com.example.server.models.Demande;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DemandeService {
    static private ArrayList<Demande> demandes= new ArrayList<>(Arrays.asList(
            new Demande(1,"B32","plomberie", "probleme d'eau",Demande.Etat.En_cours),
            new Demande(2,"E321","Electricité","Une LED ne marche plus", Demande.Etat.Traité),
            new Demande(3,"D56","Porte","Ma porte ne se ferme pas correctement", Demande.Etat.Non_traité)

    ));

    public List<Demande> getDemandes(){
        return demandes;
    }

    public Demande getDemande(long id) {
        return demandes.stream().filter(demande ->demande.getId()==id).findFirst().orElse(null);

    }


}
