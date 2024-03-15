import { Component, OnInit } from '@angular/core';
import { Projet } from '../Model/Projet.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  nbrOffre:number=0
  total:number=0
  page :number=1
  liste : Projet[]=[]
  token:any
  user:any
  currentuser:any
  titre:any
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }
  supprimerProjet(offre:Projet){
    if (confirm("voulez-vous supprimer ce Projet ?"))
    {
      this.service.deleteProjet(offre.id).subscribe(()=>{
        this.route.navigate(["/projet"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
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
      Detail(event:any){ 
      this.route.navigate(["/detail/"+event]).then(()=>{
       window.location.reload()
     });   
      }
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getProjet().subscribe(offre=>{
      this.liste=offre
      this.nbrOffre=offre.length
      console.log(this.nbrOffre)
    })
    this.user=localStorage.getItem("user")
    
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
