import { Component, OnInit } from '@angular/core';

import { EditImageService } from 'src/app/services/edit_image/edit_image.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '');
}

@Component({
  selector: 'app-edit_image',
  templateUrl: './edit_image.component.html',
  styleUrls: ['./edit_image.component.css'],
})

export class EditImageComponent implements OnInit {

  picByte: any ;
  selectedFile: File | null = null;
  showForm = false;

  constructor(
    private editImageService: EditImageService,
    private tokenStorage: TokenStorageService
  ) {}



  currentUser: any;
  retrievedImage: any;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.currentUser = getUser();

    if (this.currentUser.picByte) {
      this.getImageUrl();
      this.picByte = this.currentUser.picByte;
    }

  }

  getImageUrl(): void {
    if (this.currentUser.picByte) {
      const imageType = this.currentUser.picType === 'image/jpeg' ? 'jpeg' : 'png';
      const imageBlob = new Blob([this.currentUser.picByte], { type: `image/${imageType}` });
      const imageUrl = URL.createObjectURL(imageBlob);
      this.retrievedImage = imageUrl;
    }
  }


  onSubmit(): void {
    const reader = new FileReader();

    reader.onload = () => {
      const imageBytes = new Uint8Array(reader.result as ArrayBuffer);
      this.editImageService.editImage(imageBytes).subscribe({
        next: (data) => {
          this.currentUser.picByte = data.picByte;
          localStorage.setItem('user', JSON.stringify(data));
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.reloadPage();
        },
        error: (err) => {
          console.log(err);
        },
      });
    };

    if (this.selectedFile) {
      reader.readAsArrayBuffer(this.selectedFile);
    }
  }
  reloadPage(): void {
    window.location.reload();
  }

  showEditForm(): void {
    this.showForm = true;
  }


}
