import { Component, OnInit } from '@angular/core';
import { Developper } from '../Model/Developper.model';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modifier-dev',
  templateUrl: './modifier-dev.component.html',
  styleUrls: ['./modifier-dev.component.css']
})
export class ModifierDevComponent implements OnInit {
  id: any;
  currentSupp=new Developper()
  mail:any
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  user:any
  currentuser:any
  constructor( 
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private rout:ActivatedRoute,
    private toast:NgToastService
  ) {
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
        this.currentSupp.img=this.imgURL
      };
    }
  }
 modifierDev(){
  this.id=this.rout.snapshot.params["id"];
  console.log(this.id);
  this.service.updateDev(this.id,this.currentSupp).subscribe(admin=>{
    this.router.navigate(["/developper"]).then(()=>{
      window.location.reload();
    })
  })
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
    this.id=this.rout.snapshot.params["id"];
    this.getDev(this.id);
  }
  getDev(id:number)
  {
    this.service.getDevById(id).subscribe(data=>{
      this.currentSupp=data

    })
  }

 

}

