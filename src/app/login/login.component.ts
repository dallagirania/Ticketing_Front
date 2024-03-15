import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Admin } from '../Model/Admin.model';
import { Client } from '../Model/Client.model';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.loginForm = this.fb.group(formControls)

  }
  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }
  
 loginAdmin() {
    let data = this.loginForm.value;
    console.log(data);
    let entreprise = new Admin(undefined,undefined,data.email, data.mdp ,undefined);
    let client = new Client( undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
      ,undefined,data.email,data.mdp,undefined);
       console.log(entreprise);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.loginAdmin(entreprise).subscribe(

      res => {
        console.log(res);
        let token=res.token;
        localStorage.setItem("mytoken",token);
        localStorage.setItem("user","Admin");
        this.router.navigate(['/acceuil']).then(()=>{
          window.location.reload()
        })
      },
      err => {
        console.log(err);
          this.service.loginDevelopper(entreprise).subscribe(
      
            res => {
              console.log(res);
              let token=res.token;
              localStorage.setItem("mytoken",token);
              localStorage.setItem("user","Dev");
              this.router.navigate(['/acceuil']).then(()=>{
                window.location.reload()
              })
            },
            err => {
              console.log(err);
              this.service.loginSupport(entreprise).subscribe(
      
                res => {
                  console.log(res);
                  let token=res.token;
                  localStorage.setItem("mytoken",token);
                  localStorage.setItem("user","Supp");
                  this.router.navigate(['/acceuil']).then(()=>{
                    window.location.reload()
                  })
                },
                err => {
                  console.log(err);
                  this.service.loginClient(client).subscribe(
      
                    res => {
                      console.log(res);
                      let token=res.token;
                      localStorage.setItem("mytoken",token);
                      localStorage.setItem("user","Client");
                      this.router.navigate(['/acceuil']).then(()=>{
                        window.location.reload()
                      })
                    },
                    err => {
                      console.log(err);
                      this.toast.error({
                        detail:'error msg',
                        summary:'Aucun Compte Trouvé !!!!'
                      });
              
                    }
              
                  )
          
                }
          
              )
            }
      
          )
        

      }

    )
  }
  }
  ngOnInit(): void {
  }

}

