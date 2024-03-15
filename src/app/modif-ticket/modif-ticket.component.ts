import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Developper } from '../Model/Developper.model';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Demande } from '../Model/Demande.model';
import { Misejour } from '../Model/Misejour.model';
import { Support } from '../Model/Support.model';

@Component({
  selector: 'app-modif-ticket',
  templateUrl: './modif-ticket.component.html',
  styleUrls: ['./modif-ticket.component.css']
})
export class ModifTicketComponent implements OnInit {
  user:any
  id:any
  id1:any
  nbmise:number=0
  currentuser:any
 
  currentTicket=new Demande()
  mise=new Misejour()
  current=new Misejour()
  editor = ClassicEditor;
  liste : Developper[]=[]
  liste1 : Demande[]=[]
  listemise:Misejour[]=[]
  listesupp : Support[]=[]
  devlop : number[]=[]
  listesdev : Developper[]=[]
  selectedItems:number[]=[];
  mydate=new Date()
  constructor(
    private service:CrudService,
    private route:Router,
    private rout:ActivatedRoute,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    
   }
   
   getDevId(e:any,id:number|undefined)
   { 
    // this.id1=id?.toString()
     if(e.target.checked){
        console.log(id+ 'checked');
        this.selectedItems.push(id!)
     }else{
       console.log(id+ 'unchecked');
       this.selectedItems= this.selectedItems.filter(m=>m!=id);
     }
     console.log(this.selectedItems)
     this.current.dev=this.selectedItems
     console.log(this.current.dev)
   }

   Misejour() {
    
    this.current.nom= this.currentuser.nom
    this.current.prenom= this.currentuser.prenom
    this.current.statut= this.currentTicket.statut
    this.current.priorite= this.currentTicket.priorite
    this.current.assigne= this.currentTicket.assigne
    this.current.description= this.currentTicket.description
    this.current.tracker= this.currentTicket.tracker
    this.current.sujet= this.currentTicket.sujet
    this.current.version= this.currentTicket.version
    this.current.tache_patent= this.currentTicket.tache_patent
    this.current.temps_estime= this.currentTicket.temps_estime
    this.current.datedeb= this.currentTicket.datedeb
    this.current.echeance= this.currentTicket.echeance
    this.current.facture= this.currentTicket.facture
    this.current.datemodif= this.mydate.toISOString().slice(0,10)
    this.current.demande= JSON.parse(JSON.stringify(this.currentTicket))
   
   
    this.service.updateDemande(this.id,this.currentTicket).subscribe(Formateur=>{
      this.route.navigate(["/ticket"]).then(()=>{
        window.location.reload();
      })
  
      
    })
  
    this.service.addMisejour(this.current).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/ticket']).then(()=>{
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
    this.selectedItems=new Array<number>();
    this.id=this.rout.snapshot.params["id"];
    console.log(this.id);
     //affichage liste support
     this.service.getSupport().subscribe(offre=>{
      this.listesupp=offre
    })
    // this.service. getDemandeById(this.id).subscribe(demande=>{
    //   this.currentTicket=demande
    //   console.log(this.currentTicket);
    // })

    this.service. getDemandeById(this.id).subscribe(demande=>{
      this.currentTicket=demande
      console.log(this.currentTicket);
      this.listemise=this.currentTicket.misejour
      this.nbmise=this.listemise.length
      console.log(this.nbmise)
      //determiner la liste de dev 
      for(let miseajour of this.listemise)
      { if ((miseajour.dev.length)!=0)
        this.devlop=miseajour.dev
      }
      console.log("le num des dev "+this.devlop)
      for(let id1 of this.devlop)
      {
        this.service.getDevById(id1).subscribe(dev=>{
          this.listesdev.push(dev)
      })
      }
      console.log(this.listesdev)
     
    })

    this.user=localStorage.getItem("user")
    this.service.getDev().subscribe(offre=>{
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
}
