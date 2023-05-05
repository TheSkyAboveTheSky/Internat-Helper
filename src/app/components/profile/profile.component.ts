import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '');
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  selectedFile: File | null = null;
  retrievedImage: any;
  showForm = false;
  base64Data: any;
  retrieveResonse: any;
  message: string | null = null;
  imageName: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.currentUser = getUser();
    this.getImageUrl();
  }

  getImageUrl(): void {
    if (this.currentUser.picByte) {
      const imageType = this.currentUser.picType === 'image/jpeg' ? 'jpeg' : 'png';
      const imageBlob = new Blob([this.currentUser.picByte], { type: `image/${imageType}` });
      const imageUrl = URL.createObjectURL(imageBlob);
      this.retrievedImage = imageUrl;
    }
  }

  showEditForm(): void {
    this.showForm = true;
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile) {
      return;
    }
    console.log(this.selectedFile);

    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );

    this.httpClient
      .post('http://localhost:8080/image/upload', uploadImageData, {
        observe: 'response',
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';

        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }
  getImage(): void {
    if (!this.selectedFile || !this.selectedFile.name) {
      return;
    }
    this.httpClient
      .get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
          profileImg.setAttribute('src', this.retrievedImage);
        }
      });
  }

}
