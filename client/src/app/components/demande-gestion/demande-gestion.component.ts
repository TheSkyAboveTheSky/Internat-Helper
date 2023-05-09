import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/services/demandes/demande.service';


@Component({
  selector: 'app-demande-gestion',
  templateUrl: './demande-gestion.component.html',
  styleUrls: ['./demande-gestion.component.css'],
  providers: [DemandeService]
})
export class DemandeGestionComponent implements OnInit {
  title = 'demandes';
  demandes: Object= {}; 


  constructor(private demandeService: DemandeService){

  }
ngOnInit(): void {
    console.log('On init....')
    this.demandeService.getDemandes().subscribe((datas)=>{
      this.demandes = datas;
    })
}
}
