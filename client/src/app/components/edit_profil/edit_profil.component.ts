import { Component, OnInit } from '@angular/core';

import { EditProfilService } from 'src/app/services/edit_profil/edit_profil.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '{}');
}
@Component({
  selector: 'app-edit_profil',
  templateUrl: './edit_profil.component.html',
  styleUrls: ['./edit_profil.component.css'],
})
export class EditProfilComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    poste: null,
    date: null,
  };

  constructor(
    private editProfilService: EditProfilService,
    private tokenStorage: TokenStorageService
  ) {}

  currentUser: any;

  ngOnInit(): void {
    this.currentUser = getUser();
    this.form.name = this.currentUser.name;
    this.form.email = this.currentUser.email;
    this.form.poste = this.currentUser.poste;
    this.form.date = this.currentUser.date;
  }

  onSubmit(): void {
    const { name, email, poste, date } = this.form;

    this.editProfilService.editProfil(name, email, poste, date).subscribe({
      next: (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.reloadPage();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
