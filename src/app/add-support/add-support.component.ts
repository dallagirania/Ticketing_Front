import { Component, OnInit } from '@angular/core';
import { Support } from '../Model/Support.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-support',
  templateUrl: './add-support.component.html',
  styleUrls: ['./add-support.component.css']
})
export class AddSupportComponent implements OnInit {
  id: any;
  currentSupp=new Support()
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
      prenom: new FormControl('', [
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
    }
    this.signUpForm= this.fb.group(formControls)

  }
  get email() { return this.signUpForm.get('email') }
  get nom() { return this.signUpForm.get('nom') }
  get prenom() { return this.signUpForm.get('prenom') }
  get mdp() { return this.signUpForm.get('mdp') }
  get img() { return this.signUpForm.get('img') }
 
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
    
  registerSupport() {
    let data = this.signUpForm.value;
    console.log(data);
    let support = new Support(
      undefined,data.nom,data.prenom,data.email,data.mdp,this.imgURL);
       console.log(support);
    if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'Fil In Your Fields'
    });}
     else{

    this.service.addSupport(support).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/support']).then(()=>{
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
  }

 

}
