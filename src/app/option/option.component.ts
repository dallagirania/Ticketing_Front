import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Projet } from '../Model/Projet.model';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Demande } from '../Model/Demande.model';
import { Misejour } from '../Model/Misejour.model';
import { Support } from '../Model/Support.model';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  editor = ClassicEditor;
  nbdemande:number=0
  nbdmise:number=0
  signUpForm!: FormGroup;
  liste : Demande[]=[]
  listesupp : Support[]=[]
  listemise:Misejour[]=[]
  token:any
  id: any;
 currentProjet=new Projet()
 user:any;
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 currentuser:any
 total:number=0
 texteSansBalises:any
 mydate=new Date()
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
    private rout:ActivatedRoute)
     { 
     this.user=this.service.userDetail() 
     let formControls = {
      tracker: new FormControl('', [
        Validators.required,

      ]),
      sujet: new FormControl('', [
        Validators.required,

      ]),
       description: new FormControl('', [
        Validators.required,

      ]),
      statut: new FormControl('', [
        Validators.required,

      ]),
      priorite: new FormControl('', [
        Validators.required,

      ]),
     
      version: new FormControl('', [
        Validators.required,

      ]),
      
      echeance: new FormControl('', [
        Validators.required,

      ]),
      temps_estime: new FormControl('', [
        Validators.required,

      ]),
     
      cv: new FormControl('', [
        Validators.required,

      ]),
    }
    this.signUpForm= this.fb.group(formControls)

  }
  get tracker() { return this.signUpForm.get('tracker') }
  get sujet() { return this.signUpForm.get('sujet') }
  get description() { return this.signUpForm.get('description') }
  get statut() { return this.signUpForm.get('statut') }
  get priorite() { return this.signUpForm.get('priorité') }
  // get assigne() { return this.signUpForm.get('assigne') }
   get version() { return this.signUpForm.get('version') }
  // get tache_patent() { return this.signUpForm.get('tache_patent') }
  get datedeb() { return this.signUpForm.get('datedeb') }
  get echeance() { return this.signUpForm.get('echeance') }
  // get temps_estime() { return this.signUpForm.get('temps_estime') }
  // get facture() { return this.signUpForm.get('facture') }
  get cv() { return this.signUpForm.get('cv') }
  

 
  getProjet(id:number)
  {
    this.service.getProjetById(id).subscribe(data=>{
      this.currentProjet=data
    })
  } 

  OnSelectFile(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.userFile=file;
      var mimeType=event.target.files[0].type;
      var reader=new FileReader();
      this.imagePath=file;
      reader.readAsDataURL(file)
      reader.onload=(_event)=>{
        this.imgURL=reader.result;
        console.log(this.imgURL)
      };
    }
  
  }
  AddDemande() {
    let data = this.signUpForm.value;
    console.log(data);

    // Supprimer les balises HTML
     this.texteSansBalises = data.description.replace(/<[^>]*>/g, '  ');
      
    let demande = new Demande(
      undefined,data.tracker,data.sujet,this.texteSansBalises,data.statut,data.priorite,undefined,data.version,undefined,this.mydate.toISOString().slice(0,10),data.echeance,
      undefined,undefined,this.imgURL,JSON.parse(JSON.stringify(this.currentProjet)));
       console.log(demande);
    if(data.tacker==0||data.sujet==0||this.texteSansBalises==0||data.statut==0||data.priorite==0||data.version==0||data.echeance==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'Fil In Your Fields'
    });}
     else{

    this.service.addDemande(demande).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/option',this.currentProjet.id]).then(()=>{
          window.location.reload()
        })
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'Check Your Form!'
        });

      }

    )
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

  allmodif(event:any){
 
    this.router.navigate(["/allmofid/"+event]).then(()=>{
     window.location.reload()
   });   
  }
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.id=this.rout.snapshot.params["id"]
    //affichage liste support
    this.service.getSupport().subscribe(offre=>{
      this.listesupp=offre
    })
    // Affichage des Demandes par projet 
    this.getProjet(this.id);
    this.service.getProjetById(this.id).subscribe(projet=>{
     this.liste=projet.demande
     
           //affichage des mise a jour par demande 
            for(let demande of this.liste)
            {
              
              this.listemise=demande.misejour
              this.total=this.listemise.length
              console.log("nb de mise a jour par demande ")
              console.log(this.total)
              
            }
    this.nbdmise=this.nbdmise+this.total
    console.log(222)
    console.log(this.listemise)
    console.log(this.nbdmise)
     this.nbdemande=this.liste.length
     console.log(this.nbdemande)
     console.log(this.liste) 
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


   Detail(event:any){ 
    this.router.navigate(["/detailDemande/"+event]).then(()=>{
     window.location.reload()
   });   
    }
}


