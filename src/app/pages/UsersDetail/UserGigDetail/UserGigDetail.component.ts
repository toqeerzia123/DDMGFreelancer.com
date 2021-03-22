import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GigDescription } from '../../../../../src/app/Models/GigDescription';
import { GigOffers } from '../../../../../src/app/Models/GigOffers';
import { Packages } from '../../../../../src/app/Models/Packages';
import { GigService } from '../../../../../src/app/_service/gig.service';

@Component({
  selector: 'app-UserGigDetail',
  templateUrl: './UserGigDetail.component.html',
  styleUrls: ['./UserGigDetail.component.scss']
})
export class UserGigDetailComponent implements OnInit {
Gig_Id:number;
GigDetail:any;
UserGigDescription:GigDescription;
Basicpackage:Packages;
Standardpackage:Packages;
PremiumPackage:Packages;
Gigoffers:GigOffers;
  constructor(private gigservice:GigService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.GetUserDetail();
  }

  GetUserDetail()
  {
   
    this.Gig_Id= this.route.snapshot.params['gigId'];
    this.gigservice.UserGiginfo(this.Gig_Id).subscribe((next:any) => {
     debugger;
     this.GigDetail=next.res;
     this. UserGigDescription=this.GigDetail.gigDescription.description;
     this.Basicpackage=this.GigDetail.basicpackage;
     this.Standardpackage=this.GigDetail.gigstandardpackage;
     this.PremiumPackage=this.GigDetail.premiumpackage;
     this.Gigoffers=this.GigDetail.gigoffers;
     console.log(this.GigDetail);
     console.log(this.UserGigDescription);
    
    }, error => {
      console.log(error);
    });
   
  }
  name = 'Angular';
  imageObject = [{
      video: 'https://youtu.be/tYa6OLQHrEc',
      title: 'Youtube example one with title.',
      alt: 'youtube video'
  }, {
      video: 'https://youtu.be/6pxRHBw-k8M',
      alt: 'youtube video'
  }, {
      video: 'https://sanjayv.github.io/ng-image-slider/contents/assets/video/movie2.mp4',
      posterImage: "https://slotuniverses.co.uk/wp-content/uploads/sites/12030/upload_fed1091b34dcf8203c0729c4faa62315.png",
      title: 'Youtube example one with title.'
  }, ];



}
