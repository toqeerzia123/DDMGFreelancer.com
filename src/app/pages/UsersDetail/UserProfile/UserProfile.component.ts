import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../src/app/_service/users.service';
import { User } from '../../../../../src/app/Models/User';
import { UsersDetailDto } from '../../../../../src/app/Models/UsersDetailDto';
import { environment } from '../../../../../src/environments/environment';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class UserProfileComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  UsersDetail:UsersDetailDto;
  editAbout = true;
  editAboutIcon = 'icofont-edit';
  ImagebaseUrl = environment.Imagebaseurl + 'CategoryImages/';
  public basicContent: string;


  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  UserId:number;
  Name:string;
  Checker:boolean;
  
  constructor(private route: ActivatedRoute,private userservice:UsersService) { }

  ngOnInit() {
    this.GetUserDetail();
  }
GetUserDetail()
{
  this.UserId= this.route.snapshot.params['user_id'];
  this.userservice.UserInfo(this.UserId).subscribe((next:any) => {
   debugger;
   this.UsersDetail=next.resp;
   this.Checker=this.UsersDetail.userInfo.sellerActivated;
   console.log(next.resp);
  
  }, error => {
    console.log(error);
  });
 
}


  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }


}
