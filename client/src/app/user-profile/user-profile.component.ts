import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})export class UserProfileComponent implements OnInit {
  user: any;
  imageUrl: string = 'default_profile_image.jpg'; // Image par défaut
  showForm: boolean = false; // Variable pour afficher/cacher le formulaire
  selectedImageUrl: string = ''; // URL de l'image sélectionnée

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:8080/upload'
  });

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  showEditForm() {
    this.showForm = true;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.selectedImageUrl = reader.result as string;
      this.imageUrl = this.selectedImageUrl;
    };
  }

  onUpload() {
    const formData = new FormData();
    formData.append('image', this.selectedImageUrl);
    this.http.post('http://localhost:8080/api/profilepicture', formData)
      .subscribe(res => {
        console.log(res);
        this.showForm = false; // Cacher le formulaire après la sauvegarde réussie
      });
  }
}
