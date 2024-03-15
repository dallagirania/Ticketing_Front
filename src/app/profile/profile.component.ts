import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { Support } from '../Model/Support.model';
import { Developper } from '../Model/Developper.model';
import { Client } from '../Model/Client.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  currentAdmin=new Admin()
  currentSupport=new Support()
  currentDev=new Developper()
  currentClient=new Client()
  currentuser:any
  user:any;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      this.user=this.service.userDetail()
     }
 
     
    modifierProfile(){
     this.id=this.rout.snapshot.params["id"];
     console.log(this.id);
     if(this.user=='Admin')
     {  this.service.updateAdmin(this.id,this.currentuser).subscribe(entreprise=>{
      this.router.navigate(["/profile", this.currentuser.id]).then(()=>{
        window.location.reload();
      }) 
     })}else{ 
        if(this.user=='Dev'){
          this.service.updateDev(this.id,this.currentuser).subscribe(entreprise=>{
            this.router.navigate(["/profile", this.currentuser.id]).then(()=>{
              window.location.reload();
            }) 
           })
          }else{
            if(this.user=='Supp'){
              this.service.updateSupport(this.id,this.currentuser).subscribe(entreprise=>{
                this.router.navigate(["/profile", this.currentuser.id]).then(()=>{
                  window.location.reload();
                }) 
               })
                }else{  if(this.user=='Client'){
                  this.service.updateClient(this.id,this.currentuser).subscribe(entreprise=>{
                    this.router.navigate(["/profile", this.currentuser.id]).then(()=>{
                      window.location.reload();
                    }) 
                   })
                    }
      
                }
  
          }
    }
    
    }
    onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
          this.currentuser.img=this.imgURL
        };
      }
    }
   
    
    logOut(){
      localStorage.clear()
      this.router.navigate(['/login']).then(()=>{
        window.location.reload()
      });
  
    }
    profile(event:any){
   
      this.router.navigate(["/profile/"+event]).then(()=>{
       window.location.reload()
     });   
      }

   ngOnInit(): void {
    this.user=localStorage.getItem("user")
    if(this.user=='Admin')
   {  this.service.getAdminById(this.service.userDetail().id).subscribe(admin=>{
      this.currentuser=admin
  })}else{ 
      if(this.user=='Dev'){
      this.service.getDevById(this.service.userDetail().id).subscribe(dev=>{
      this.currentuser=dev
  })
        }else{
          if(this.user=='Supp'){
            this.service.getSupportById(this.service.userDetail().id).subscribe(support=>{
            this.currentuser=support
        })
              }else{  if(this.user=='Client'){
                this.service.geClientById(this.service.userDetail().id).subscribe(client=>{
                this.currentuser=client
            })
                  }
    
              }

        }
  }   
 }
}
 