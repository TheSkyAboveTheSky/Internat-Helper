package com.example.server.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "demandes")
public class Demande {
        public enum Etat {
            Non_traité,
            En_cours,
            Traité

        }
        private long id;
        private String type;
        private Etat etat;
        private String contenu;
        private String chambre;

        public Demande(long id,String chambre,String type,String contenu, Etat etat ) {
            this.type = type;
            this.id=id;
            this.etat = etat;
            this.contenu = contenu;
            this.chambre = chambre;

        }

        public String getChambre() {
            return chambre;
        }

        public void setChambre(String chambre) {
            this.chambre = chambre;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public Etat getEtat() {
            return etat;
        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public void setEtat(Etat etat) {
            this.etat = etat;
        }

        public String getContenu() {
            return contenu;
        }

        public void setContenu(String contenu) {
            this.contenu = contenu;
        }
    }


