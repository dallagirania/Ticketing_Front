import { Component, OnInit } from '@angular/core';
import { Misejour } from '../Model/Misejour.model';
import { Demande } from '../Model/Demande.model';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Projet } from '../Model/Projet.model';
import { Support } from '../Model/Support.model';
import { Developper } from '../Model/Developper.model';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit  {
  listesdev : Developper[]=[]
  listemise:Misejour[]=[]
  devlop:number[]=[]
  nbrOffre:number=0
  total:number=0
  page :number=1
  develop=new Developper()
  currentProj=new Demande()
  support=new Support()
  current=new Projet()
  
  liste:Misejour[]=[]
  supp:any
 id:any
 id1:any
  token:any
  user:any
  currentuser:any
  titre:any
  constructor(
    private service:CrudService,
    private route:Router,
    private rout:ActivatedRoute,
    private toast:NgToastService
  ) { }
 
  logOut(){
    localStorage.clear()
    this.route.navigate(['/login']).then(()=>{
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

 
  this.id=this.rout.snapshot.params["id"];
  this.getDemande(this.id);
  
}
download(base64String:any){
  let filename:any="cv";
  const source=`${base64String}`;
  const link=document.createElement("a");
  link.href=source;
  link.download=`${filename}.pdf`
  link.click();

} 
getDemande(id:number)
{
  this.service.getDemandeById(id).subscribe(data=>{
    this.currentProj=data
    this.liste=this.currentProj.misejour 
    this.nbrOffre= this.liste.length
   
    //determiner la liste de dev 
    for(let miseajour of this.liste)
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
    console.log(this.currentProj.projet)
    this.id1=this.currentProj.projet?.id
    this.service.getProjetById(this.id1!).subscribe(data=>{
      this.current=data
      console.log(this.current)
  
    })
     

     this.supp=this.currentProj.assigne
    this.service.getSupportById(parseInt(this.supp)).subscribe(dev=>{
      this.support=dev
    
  })
  })
  
 
}


}
 
  



