import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileuploadService } from '../../../../src/app/_service/fileupload.service';
import { BannerService } from '../../../../src/app/_service/banner.service';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.scss']
})
export class BannerComponent implements OnInit {
  fileData: File = null;
previewUrl:any = null;
fileUploadProgress: string = null;
uploadedFilePath: string = null;
form: FormGroup;
  bannerslist:any;
  constructor(private bannerservice:BannerService,private http: HttpClient,private uploadfileservice:FileuploadService,) { }

  ngOnInit() {
    this.GetBanners();
    console.log (this.bannerslist);
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }
  
  

  var reader = new FileReader();     
  reader.readAsDataURL(this.fileData);
  reader.onload = (_event) => {
    this.previewUrl = reader.result;
  }
}
clickFunction(id:number) {
  this.bannerservice.Removebanner(id).subscribe();

 

}
// onSubmit() {
 
//   const formData = new FormData();
//     formData.append('image', this.fileData);
//     var apipath="AddBanner";
// debugger;
// this.uploadfileservice.uploadbannerimage(this.fileData,apipath).subscribe(res => {
 
// })
   
// }






  GetBanners(){
    this.bannerservice.GetBannerData().subscribe((next:any) => {
      this.bannerslist=[];
  
      this.bannerslist=next.res;
    }, error => {
      console.log(error);
    });
  }

}
