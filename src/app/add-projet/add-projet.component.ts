import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Projet } from '../Model/Projet.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../Model/Client.model';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  liste : Client[]=[]
  nbranim=0;
  total=0;
 ajoutForm: FormGroup
 currentClient=new Client();
 currentClient1=new Client();
 user:any
 currentuser:any
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 offre2:Projet=new Projet();
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      // this.user=this.service.userDetail()

      let formControls = {
        nom: new FormControl('', [
          Validators.required,
  
        ]),
       
        datedeb: new FormControl('', [
          Validators.required,
  
        ]),
        domaine: new FormControl('', [
          Validators.required,
  
        ]),
        description: new FormControl('', [
          Validators.required,
  
        ]),
       
        cl: new FormControl('', [
          Validators.required,
  
        ]),
       
      }
      this.ajoutForm= this.fb.group(formControls)
    }
    
    get nom() { return this.ajoutForm.get('nom') }
    get domaine() { return this.ajoutForm.get('domaine') }
    get description() { return this.ajoutForm.get('description') }
    get datedeb() { return this.ajoutForm.get('datedeb') }
    get client() { return this.ajoutForm.get('cl') }
   
    ajouterProjet() {
      let data = this.ajoutForm.value;
      this.service.geClientById(parseInt(data.cl)).subscribe(Proprietaire=>{
        this.currentClient=Proprietaire
        console.log(this.currentClient);
      })
      console.log("le resulta du form ");
      console.log(data);
      console.log(parseInt(data.cl));
      let anim = new Projet(
         undefined ,data.nom, data.datedeb,data.domaine, data.description,JSON.parse(JSON.stringify(this.currentClient)));
         console.log(anim); 
         this.currentClient.projet.push(anim);
         console.log(55)
         this.service.updateClient(this.currentClient.id!,this.currentClient)
      if(data.nom==0||data.datedeb==0||data.domaine==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else {    
      this.service.addProjet(anim).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          }); 
  
          this.router.navigate(['/projet']).then(()=>{
            window.location.reload()
          });
        },
        err => {
          console.log(err);
          // this.toast.error({
          //   detail:'error msg',
          //   summary:'verifier votre formulaire !'
          // });
  
        }
  
      )
    
  
    }
  }
  
    ngOnInit(): void {
      this.user=localStorage.getItem("user")
      this.service.getClient().subscribe(offre=>{
        this.liste=offre
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
  
  }