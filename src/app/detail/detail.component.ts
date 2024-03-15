import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Projet } from '../Model/Projet.model';
import { Demande } from '../Model/Demande.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit  {

  nbrOffre:number=0
  total:number=0
  page :number=1
  currentProj=new Projet()
  liste:Demande[]=[]
 id:any
  token:any
  user:any
  currentuser:any
  titre:any
  constructor(
    private service:CrudService,
    private route:Router,
    private rout:ActivatedRoute,
    private toast:NgToastService
  ) { }
 
  logOut(){
    localStorage.clear()
    this.route.navigate(['/login']).then(()=>{
      window.location.reload()
    });

  }
  profile(event:any){
 
    this.route.navigate(["/profile/"+event]).then(()=>{
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
  this.getProjet(this.id);
}
getProjet(id:number)
{
  this.service.getProjetById(id).subscribe(data=>{
    this.currentProj=data
    this.liste=this.currentProj.demande
    this.nbrOffre= this.liste.length

  })
}


}
 
  


