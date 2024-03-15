import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerAdminForm:FormGroup
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
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
   
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
  
    }
    this.registerAdminForm= this.fb.group(formControls)

  }
  get email() { return this.registerAdminForm.get('email') }
  get mdp() { return this.registerAdminForm.get('mdp') }
  get nom() { return this.registerAdminForm.get('nom') }

  registerFormateur() {
    let data = this.registerAdminForm.value;
    console.log(data);
    let admin = new Admin(undefined,data.nom,data.email, data.mdp ,undefined);
       console.log(admin);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.addAdmin(admin).subscribe(

      res => {
        console.log(res);

        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'verifier votre formulaire !'
        });

      }

    )
  }

  }

  ngOnInit(): void {
  }

}
