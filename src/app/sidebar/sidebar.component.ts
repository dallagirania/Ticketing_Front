import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Projet } from '../Model/Projet.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  nbrprojet=0;
  total=0;
  liste:Projet[]=[]
  user:any
  currentuser:any
    constructor(
      private service: CrudService,
      private router: Router,
    ) {
   
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


    this.service.geClientById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.projet
      this.nbrprojet=proprietaire.projet.length
      console.log(this.nbrprojet)
     
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
    option(event:any){
   
     this.router.navigate(["/option/"+event]).then(()=>{
      window.location.reload()
    });   
     }
    
    
   
  }
  