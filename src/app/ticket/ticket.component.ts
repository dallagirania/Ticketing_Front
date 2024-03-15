import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/Client.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Demande } from '../Model/Demande.model';
import { Projet } from '../Model/Projet.model';
import { Misejour } from '../Model/Misejour.model';
import { Developper } from '../Model/Developper.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit { 
  nbdev:number=0
  nbrOffre:number=0
  nbrSupp:number=0
  total:number=0
  total1:number=0
  total2:number=0
  page :number=1
  term:any
  term1:any
  liste2 : Demande[]=[]
  liste3 : Demande[]=[]
   //partie dev
   liste_mise : Misejour[]=[]
  //partie client 
  liste5 : Demande[]=[]
  liste6 : Demande[]=[]
  listedemande : Demande[]=[]
  liste : Demande[]=[]
  filteredArray: Misejour[]=[] 
  listemissupp: Misejour[]=[]
  listemissupp1: Misejour[]=[]
  listemise: Misejour[]=[]
  devlop:number[]=[]
  listp:Projet[]=[]
  token:any
  user:any
  supp:any
  currentuser:any
  titre:any
  texteSansBalises:any
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }
 
  logOut(){
    localStorage.clear()
    this.route.navigate(['/login']).then(()=>{
      window.location.reload()
    });

  }
  Modifier(event:any){
 
    this.route.navigate(["/ModifierTicket/"+event]).then(()=>{
     window.location.reload()
   });   
    }
  
  
  profile(event:any){
 
    this.route.navigate(["/profile/"+event]).then(()=>{
     window.location.reload()
   });   
    }

  Detail(event:any){ 
      this.route.navigate(["/detailDemande/"+event]).then(()=>{
       window.location.reload()
     });   
      }

 
      
  ngOnInit(): void {
    this.user=localStorage.getItem("user")

    //affichage des deande cote Admin 
    this.service.getDemande().subscribe(demande=>{
      this.liste=demande
      this.nbrOffre=demande.length
      console.log(this.nbrOffre) 
   
    })

     //Coté client 
    // affichage des demande par client 
    this.service.geClientById(this.service.userDetail().id).subscribe(client=>{
      this.listp=client.projet
      console.log(this.listp)
      for(let proj of this.listp)
      {
        this.listedemande=proj.demande
        this.total1=this.listedemande.length
      }
      console.log(this.listedemande)
  })

//affichage des deande cote Support  

this.service.getDemande().subscribe(demande=>{
  this.liste2=demande.filter(dem=>dem.assigne==this.service.userDetail().id)
  this.total2=this.liste2.length
// Utilisation de filter et Set pour éliminer les doublons
//   this.filteredArray=this.listemissupp.filter((element, index)=>this.listemissupp.indexOf(element)===index);
// console.log( this.filteredArray)
})


//affichage pour Dev
this.service.getDemande().subscribe(data=>{
  this.liste5=data
  for(let dem of this.liste5){
    this.listemise=dem.misejour 
    for(let miseajour of  this.listemise)
    { if ((miseajour.dev.length)!=0)
      {  
        this.devlop=miseajour.dev
        console.log(this.devlop)
        for(let dev of this.devlop)
        {
          if(this.service.userDetail().id==dev)
          {
            this.liste6.push(dem)
            this.nbdev=this.liste6.length
          
          }
        }
      }
    }
   
  }
  console.log(this.nbdev)
 
})
// this.service.getMisejour().subscribe(mis=>{
//   this.liste_mise=mis
//   for(let m of this.liste_mise){ 
    
//     if ((m.dev.length)!=0)
//       {  
//         this.devlop=m.dev
//         console.log(this.devlop)
//         for(let dev of this.devlop)
//         {
//           if(this.service.userDetail().id==dev)
//           {

//             this.liste6.push(m.demande!)
//             this.nbdev=this.liste6.length
          
//           }
//         }
      
//     }
   
//   }
//   console.log(this.nbdev)
 
// })


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
