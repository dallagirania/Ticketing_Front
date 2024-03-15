import { Component, OnInit } from '@angular/core';
import { Projet } from '../Model/Projet.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Developper } from '../Model/Developper.model';
import { Support } from '../Model/Support.model';
import { Client } from '../Model/Client.model';
import Chart from 'chart.js/auto';
import { Demande } from '../Model/Demande.model';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  nbrprojet=0;
  nbrdev=0;
  nbrClient=0;
  nbsupp=0;
  total=0;
  liste:Projet[]=[]
  listep:Projet[]=[]
  liste1:Developper[]=[]
  liste2:Support[]=[]
  liste3:Client[]=[]
  client:Client[]=[]
  proj:Projet[]=[]
  listedem:Demande[]=[]
  listedem1:Demande[]=[]
  listedem2:Demande[]=[]

  listeSat1:Demande[]=[]
  listeSat2:Demande[]=[]
  listeSat3:Demande[]=[]
  listeSat4:Demande[]=[]
  listeSat5:Demande[]=[]
  listeSat6:Demande[]=[]
  listeSat7:Demande[]=[]
  nbdem:number=0
  liste_nb_dem:number[]=[]
  liste_nb_dem_proj:number[]=[]
  liste_nb_dem_stat:number[]=[]
  listenb:number[]=[]
  listenom:String[]=[]
  liste_proj_nom:String[]=[]
  nb:number=0
  nb1:number=0
  nb2:number=0
  s1:number=0
  s2:number=0;s3:number=0;s4:number=0;s5:number=0;s6:number=0;s7:number=0
  user:any
  currentuser:any
  //partie client 
  liste_proj:Projet[]=[]
  liste_proj_nom1:String[]=[]
  liste_dem:Demande[]=[]
  liste_nb_dem1:number[]=[]
  nb_dem:number=0
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

    this.service.getDev().subscribe(offre=>{
      this.liste1=offre
      this.nbrdev=offre.length
      console.log(this.nbrdev)
    })
    this.service.getSupport().subscribe(supp=>{
      this.liste2=supp
      this.nbsupp=supp.length
      console.log(this.nbsupp)
    })

    this.service.getClient().subscribe(cli=>{
      this.liste3=cli
      this.nbrClient=cli.length
      console.log(this.nbrClient)
    })

    this.service.getProjet().subscribe(projet=>{
      this.liste=projet
      this.nbrprojet=projet.length
      console.log(this.nbrprojet)
    })

//******** ****** Partie Admin : 
//Affichage des charts 1 : les clients plus fidéles 
      this.service.getClient().subscribe(cli=>{
        this.client=cli
        this.nbrClient=cli.length
        for (let c of this.client)
        {
          this.listenom.push(c.nom!),
          this.proj=c.projet
          this.nb=this.proj.length
          this.listenb.push(this.nb)

        }
        console.log(this.listenb)
      })

    var myChart= new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.listenom,
        datasets: [{
          label: '# Nb de Projet',
          data: this.listenb,
          borderWidth: 0.5,
          barPercentage:0.5,
          borderRadius:5,
          barThickness: 10,
          // maxBarThickness:20 ,
          minBarLength: 2,
        }]
      },
      options:{  
        scales: {
          y: {
            beginAtZero: true,
            max: 10, 
							min: 0, 
							ticks: {
								stepSize: 1, 
								padding: 10
							}
          }
        }
      }
      
    });

    //Affichage des charts 2 : le nb de demande par projet  
    this.service.getProjet().subscribe(projet=>{
      this.listep=projet
      this.nbrprojet=projet.length
      console.log(this.nbrprojet)
      for(let pro of this.listep)
      {
        this.liste_proj_nom.push(pro.nom!)
        this.listedem=pro.demande
        this.nbdem=this.listedem.length
        this.liste_nb_dem.push(this.nbdem)
        console.log(this.liste_nb_dem)
      }
    })
         
          var myLineChart = new Chart("myLineChart", {
            type: 'line',
            data: {
              labels:  this.liste_proj_nom,
              datasets: [{
                label: 'NB Deamnde',
                data:this.liste_nb_dem,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor:" #fdcffe",
                borderWidth: 2,
                 pointBackgroundColor:'rgba(255, 99, 132, 1)',
							fill:true,
							tension:0.5,

              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  max: 8, 
                    min: 0, 
                    ticks: {
                      stepSize: 1, 
                      padding: 10
                    }
                }
              }
            }
          });
   

  //Affichage des charts 3 : les # types de demandes
  this.service.getDemande().subscribe(dem=>{
    this.listedem1=dem.filter(dem=>dem.tracker=="Evolution")
    this.listedem2=dem.filter(dem=>dem.tracker=="Anomalie") 
    this.nb1= this.listedem1.length
    this.nb2= this.listedem2.length
    this.liste_nb_dem_proj.push(this.nb1)
    this.liste_nb_dem_proj.push(this.nb2)
    console.log("liste_nb_dem_proj" +this.liste_nb_dem_proj)
  })

  
  var polarChart = new Chart("mydoughnutChart", {
    type: 'doughnut',
    data: {
      labels: ["Evolution", "Anomalie"],
      datasets: [{
      
        data:this.liste_nb_dem_proj,
        borderWidth: 3, 
        borderColor: "rgba(255,255,255,1)",
        backgroundColor: [
         
          "#68e365",
          "#ffa755",
        ],
        hoverBackgroundColor: [
        
          "#68e365",
          "#ffa755",
        ]

      }],
     
    },
    options: {
      cutout: 80,
      responsive: true,
      maintainAspectRatio: false, // Pour empêcher la déformation du graphique dans un conteneur réactif
     
    }
  
  });

 //Affichage des charts 4 : les # Status de demandes

 this.service.getDemande().subscribe(dem=>{
  this.listeSat1=dem.filter(dem=>dem.statut=="En attente")
  this.listeSat2=dem.filter(dem=>dem.statut=="En Cours") 
  this.listeSat3=dem.filter(dem=>dem.statut=="Terminé")
  this.listeSat4=dem.filter(dem=>dem.statut=="Suspendu")
  this.listeSat5=dem.filter(dem=>dem.statut=="Annulé")
  this.listeSat6=dem.filter(dem=>dem.statut=="En retard")
  this.listeSat7=dem.filter(dem=>dem.statut=="En avance")
  
  this.s1= this.listeSat1.length
  this.s2= this.listeSat2.length
  this.s3= this.listeSat3.length
  this.s4= this.listeSat4.length
  this.s5= this.listeSat5.length
  this.s6= this.listeSat6.length
  this.s7= this.listeSat7.length
  this.liste_nb_dem_stat.push(this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7)
  console.log("liste_nb_dem_stat    " +this.liste_nb_dem_stat)
})

var polChart = new Chart("mypolarChart", {
  type: 'polarArea',
  data: {
    labels: ["En attente", "En Cours","Terminé","Suspendu","Annulé","En retard","En avance"],
    datasets: [{
    
      data:this.liste_nb_dem_stat,
      borderWidth: 3, 
      borderColor: "rgba(255,255,255,1)",
      backgroundColor: [
        "rgba(91, 207, 197, 1)",
        "rgba(75, 255, 162, .5)",
        "rgba(112, 159, 186, 1)",
        "rgba(238, 60, 60, 1)",
        "rgba(54, 147, 255, 1)",
        "rgba(255, 92, 0, 1)",
        'rgba(254, 176, 25, 1)',
      ],
      hoverBackgroundColor: [
      
        "rgba(91, 207, 197, 1)",
        "rgba(75, 255, 162, .5)",
        "rgba(112, 159, 186, 1)",
        "rgba(238, 60, 60, 1)",
        "rgba(54, 147, 255, 1)",
        "rgba(255, 92, 0, 1)",
        'rgba(254, 176, 25, 1)',
      ]

    }],
   
  },
  options: {
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: true,
    scales: {
      r: {
        ticks: {
          display: true,
        },
        grid: {
          display: true,
        },
      },
    },
  },

});


//******** ****** Partie Client  : 
//Affichage des charts 1 : l'evolution des demandes des chaque client 
    this.service.geClientById(this.service.userDetail().id).subscribe(client=>{
      this.liste_proj=client.projet
      console.log(this.liste_proj)
      for(let proj of this.liste_proj)
      {
        this.liste_proj_nom1.push(proj.nom!)
        console.log(this.liste_proj_nom1)
        this.liste_dem=proj.demande
        this.nb_dem=this.liste_dem.length
        this.liste_nb_dem1.push(this.nb_dem)
      }
      console.log(this.liste_nb_dem1)
    })
    var myChart2= new Chart("myChart2", {
      type: 'bar',
      data: {
        labels: this.liste_proj_nom1,
        datasets: [{
          label: '# Nb de dem',
          data: this.liste_nb_dem1,
          borderWidth: 0.5,
          barPercentage:0.5,
          borderRadius:5,
          barThickness: 10,
          minBarLength: 2,
        }]
      },
      options:{  
        scales: {
          y: {
            beginAtZero: true,
            max: 10, 
							min: 0, 
							ticks: {
								stepSize: 1, 
								padding: 10
							}
          }
        }
      }
      
    }); 

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
  