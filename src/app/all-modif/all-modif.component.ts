import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Demande } from '../Model/Demande.model';
import { Support } from '../Model/Support.model';
import { Misejour } from '../Model/Misejour.model';
import { Projet } from '../Model/Projet.model';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Developper } from '../Model/Developper.model';

@Component({
  selector: 'app-all-modif',
  templateUrl: './all-modif.component.html',
  styleUrls: ['./all-modif.component.css']
})
export class AllModifComponent  implements OnInit {
  editor = ClassicEditor;
  nbdemande:number=0
  signUpForm!: FormGroup;
  liste : Demande[]=[]
  listesdev : Developper[]=[]
  listemise:Misejour[]=[]
  devlop:number[]=[]
  token:any
  id: any;
 develop=new Developper()
currentdemande=new Demande()
 user:any;
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 currentuser:any
 total:number=0
 mydate=new Date()
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
    private rout:ActivatedRoute)
     { 
     this.user=this.service.userDetail() 
   
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
    this.id=this.rout.snapshot.params["id"]
  
    // Affichage des Demandes par projet 
    this.service.getDemandeById(this.id).subscribe(demande=>{
     this.currentdemande=demande
     //affichage des mise a jour par demande 
    this.listemise=this.currentdemande.misejour
    this.total=this.listemise.length
    console.log("le nombre des mise a jour pard demande",this.total)
    console.log("affichage des mise a jour par demande")
    console.log(this.listemise)
  
    for(let miseajour of this.listemise)
    { if ((miseajour.dev.length)!=0)
      this.devlop=miseajour.dev
    }
    console.log("le num des dev "+this.devlop)
    for(let id of this.devlop)
    {
      this.service.getDevById(id).subscribe(dev=>{
        this.develop=dev
        this.listesdev.push(this.develop)
    })
    }
    console.log(this.listesdev)

   })
 

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



