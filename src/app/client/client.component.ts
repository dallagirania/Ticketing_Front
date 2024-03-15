import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/Client.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  nbrOffre:number=0
  total:number=0
  page :number=1
  liste : Client[]=[]
  token:any
  user:any
  currentuser:any
  titre:any
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }
  supprimerClient(offre:Client){
    if (confirm("voulez-vous supprimer ce Support ?"))
    {
      this.service.deleteClient(offre.id).subscribe(()=>{
        this.route.navigate(["/client"]).then(()=>{
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
    Modifier(event:any){
 
      this.route.navigate(["/ModifierClient/"+event]).then(()=>{
       window.location.reload()
     });   
      }
    
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getClient().subscribe(offre=>{
      this.liste=offre
      this.nbrOffre=offre.length
      console.log(this.nbrOffre) 
    })
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
