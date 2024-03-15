import { Component, OnInit } from '@angular/core';
import { Client } from '../Model/Client.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  id: any;
  currentSupp=new Client()
  signUpForm!: FormGroup;
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
    private toast:NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,

      ]),
      adresse: new FormControl('', [
        Validators.required,

      ]),
       domaine: new FormControl('', [
        Validators.required,

      ]),
      tel: new FormControl('', [
        Validators.required,

      ]),
      fax: new FormControl('', [
        Validators.required,

      ]),
       site: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      img: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      directeur: new FormControl('', [
        Validators.required,

      ]),
      directeur_fon: new FormControl('', [
        Validators.required,

      ]),
      directeur_email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      consultant: new FormControl('', [
        Validators.required,

      ]),
      consultant_fon: new FormControl('', [
        Validators.required,

      ]),
      consultant_email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
    }
    this.signUpForm= this.fb.group(formControls)

  }
  get email() { return this.signUpForm.get('email') }
  get nom() { return this.signUpForm.get('nom') }
  get domaine() { return this.signUpForm.get('domaine') }
  get mdp() { return this.signUpForm.get('mdp') }
  get img() { return this.signUpForm.get('img') }
  get adresse() { return this.signUpForm.get('adresse') }
  get tel() { return this.signUpForm.get('tel') }
  get fax() { return this.signUpForm.get('fax') }
  get site() { return this.signUpForm.get('site') }
  get directeur() { return this.signUpForm.get('directeur') }
  get directeur_email() { return this.signUpForm.get('directeur_email') }
  get directeur_fon() { return this.signUpForm.get('directeur_fon') }
  get consultant() { return this.signUpForm.get('consultant') }
  get consultant_fon() { return this.signUpForm.get('consultant_fon') }
  get consultant_email() { return this.signUpForm.get('consultant_email') }
 
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
        // this.currentAnim.image=this.imgURL
      };
    }
  }
  
  registerClient() {
    let data = this.signUpForm.value;
    console.log(data);
    let client = new Client(
      undefined,data.nom,data.domaine,data.adresse,data.tel,data.fax,data.site,data.directeur,data.directeur_fon,data.directeur_email,data.consultant,data.consultant_fon
           ,data.consultant_email,data.email,data.mdp,this.imgURL);
       console.log(client);
    if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0||this.imgURL==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'Fil In Your Fields'
    });}
     else{

    this.service.addClient(client).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/client']).then(()=>{
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

 

}}

