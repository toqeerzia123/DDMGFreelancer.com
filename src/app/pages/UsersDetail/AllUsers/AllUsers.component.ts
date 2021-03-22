import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { UsersService } from '../../../../../src/app/_service/users.service';

@Component({
  selector: 'app-AllUsers',
  templateUrl: './AllUsers.component.html',
  styleUrls: ['./AllUsers.component.scss']
})
export class AllUsersComponent implements OnInit {
  brandsList:any;
  form: FormGroup;
  key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  Useremail:string;
  progress: number = 0;
  UsersList:any[];
  type:any;
  FilteredUsersList:any[];
  @ViewChild('typeselect',{static:false}) private typeselect: ElementRef;
  constructor(private fb:FormBuilder,private userservice:UsersService) { 
  }
  ngOnInit() {
    this.GetUsers();
    this.form = this.fb.group({
    
      avatar: [null]
    })
  }
  updatestatus(id:number) {
    this.userservice.ChangeStatus(id).subscribe((next:any)=>{
      debugger;
      this.UsersList.forEach(x=>{if(x.user_id==id){x.status=!x.status}});
      var data=this.UsersList;
    }, error => {
      console.log(error);
    });
 
    
  }
 Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
   
  GetUsers(){
    this.userservice.GetUserdata().subscribe((next:any) => {
      this.UsersList=[];
  
      this.UsersList=next.resp;
      this.FilteredUsersList=next.resp;
    }, error => {
      console.log(error);
    });
  }
  FilterByEmail(){
    if(this.Useremail==""){
      this.UsersList=this.UsersList
     }
     else{
       if(this.UsersList!=null){
         this.UsersList=this.UsersList.filter(res=>{
           return res.email.match(this.Useremail)
         })
       }
    
     }
  }
  FilterByStatus(num){
   
    debugger;
    if(num=="0"){
      this.UsersList=this.FilteredUsersList;
      console.log(this.UsersList);
    }
    if(num=="1"){

      this.UsersList=this.FilteredUsersList.filter(x=>x.status==true);
    }
    if(num=="2"){
     
      this.UsersList=this.FilteredUsersList.filter(x=>x.status==false);
    }
   

  }
  FilterByType(num){
   
    debugger;
    if(num=="0"){
      this.UsersList=this.FilteredUsersList;
      console.log(this.UsersList);
    }
    if(num=="1"){

      this.UsersList=this.FilteredUsersList.filter(x=>x.sellerActivated==false);
    }
    if(num=="2"){
     
      this.UsersList=this.FilteredUsersList.filter(x=>x.sellerActivated==true);
    }
   

  }

  }
  
  
 
 







