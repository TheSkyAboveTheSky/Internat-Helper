import { Injectable } from '@angular/core';
import {Problem} from "./_model/problem.model";
import {FileHandle} from "./_model/file-handle-model";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor( private  sanitizer: DomSanitizer) { }

  public  createImages( problem : Problem){
    const   problemImages :any[] =problem.Images;
    const problemImagesToFileHandle: FileHandle[] = [];

    for (let i=0; i<problemImages.length ; i++){
       const imageFileData =  problemImages[i] ;

        const imageBlob =this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

        const imageFile = new File([imageBlob],imageFileData.name,{type:imageFileData.type})
         const finalFileHandle : FileHandle = {
            file: imageFile,
           url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
         };
      problemImagesToFileHandle.push(finalFileHandle);

    }
   problem.Images = problemImagesToFileHandle;
    return problem;



  }
  public dataURItoBlob(picBytes: string, imageType: string): Blob {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: imageType});
    return blob;
  }
}
