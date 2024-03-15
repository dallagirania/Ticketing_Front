import { Component, OnInit } from '@angular/core';
import { Support } from '../Model/Support.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  nbrOffre:number=0
  total:number=0
  page :number=1
  liste : Support[]=[]
  liste2: Support[]=[]
  liste3: Support[]=[]
  token:any
  user:any
  nom:any
  term: any;
  currentuser:any
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }
  supprimerSupport(offre:Support){
    if (confirm("voulez-vous supprimer ce Support ?"))
    {
      this.service.deleteSupport(offre.id).subscribe(()=>{
        this.route.navigate(["/support"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
  Search(){
    if(this.nom !=""){
      this.liste2= this.liste2.filter(res =>{return res.nom!.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());}); 
      console.log("recherche efecture avec succée")  
    }else{
      this.liste2=this.liste3
      console.log("pas de resultat ")  
    }
  }
  logOut(){
    localStorage.clear()
    this.route.navigate(['/login']).then(()=>{
      window.location.reload()
    });

  }
  Modifier(event:any){
 
    this.route.navigate(["/ModifierSupp/"+event]).then(()=>{
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
    this.service.getSupport().subscribe(offre=>{
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