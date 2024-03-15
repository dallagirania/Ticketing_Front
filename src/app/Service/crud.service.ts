import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { Developper } from '../Model/Developper.model';
import { Support } from '../Model/Support.model';
import { Client } from '../Model/Client.model';
import { Projet } from '../Model/Projet.model';
import { Demande } from '../Model/Demande.model';
import { Misejour } from '../Model/Misejour.model';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUrl="http://localhost:8081/api/admin/loginadmin"
  registeradminUrl="http://localhost:8081/api/admin/registeradmin"
  registerDevelopperUrl = "http://localhost:8081/api/dev/registerdev"
  loginDevelopperUrl="http://localhost:8081/api/dev/logindev"
 
  registerSupportUrl = "http://localhost:8081/api/support/registerSup"
  logiSupportUrl="http://localhost:8081/api/support/loginsupp"

  registerClientUrl = "http://localhost:8081/api/client/registerClient"
  loginClientUrl="http://localhost:8081/api/client/loginClient"

  
  apiUrl="http://localhost:8081/api"
  
  helper=new JwtHelperService();
  constructor(
     private http: HttpClient,
    private router: Router) 
    { }

    userDetail(){
      let token:any=localStorage.getItem('mytoken');
      let decotoken=this.helper.decodeToken(token);
      return decotoken.data
    }

    addAdmin(proprietaire: Admin) {
      return this.http.post<any>(this.registeradminUrl, proprietaire);
    }
    loginAdmin(admin: Admin) {
      return this.http.post<any>(this.  loginUrl, admin);
    }

    getAdminById(id : number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/admin/${id}`);
    }
    updateAdmin(id:number,entreprise:Admin):Observable<Admin>{
      const Url=`${this.apiUrl+"/admin"}/${id}`
      return this.http.put<Admin>(Url,entreprise,httpOption)
    }

    /***********       dEVELOPPER      ************** */
    addDevelopper(proprietaire: Developper) {
      return this.http.post<any>(this.registerDevelopperUrl, proprietaire);
    }
    
    loginDevelopper(proprietaire: Developper) {
      return this.http.post<any>(this.loginDevelopperUrl, proprietaire);
    }
    getDev():Observable<Developper[]>{
      return this.http.get<Developper[]>(this.apiUrl+"/dev")  
    }
    deleteDev(id:number|undefined){
      const Url=`${this.apiUrl+"/dev"}/${id}`
      return this.http.delete(Url,httpOption)
    }
    updateDev(id:number,entreprise:Developper):Observable<Developper>{
      const Url=`${this.apiUrl+"/dev"}/${id}`
      return this.http.put<Developper>(Url,entreprise,httpOption)
    }
    getDevById(id : number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/dev/${id}`);
    }

/***********       SUPPORT      ************** */
    addSupport(proprietaire: Support) {
      return this.http.post<any>(this.registerSupportUrl, proprietaire);
    }
    loginSupport(proprietaire: Developper) {
      return this.http.post<any>(this.logiSupportUrl, proprietaire);
    }
    getSupport():Observable<Support[]>{
      return this.http.get<Support[]>(this.apiUrl+"/support")  
    }

    updateSupport(id:number,entreprise:Support):Observable<Support>{
      const Url=`${this.apiUrl+"/support"}/${id}`
      return this.http.put<Support>(Url,entreprise,httpOption)
    }
    deleteSupport(id:number|undefined){
      const Url=`${this.apiUrl+"/support"}/${id}`
      return this.http.delete(Url,httpOption)
    }
    
    getSupportById(id : number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/support/${id}`);
    }

    /***********       Client      ************** */
    addClient(proprietaire: Client) {
      return this.http.post<any>(this.registerClientUrl, proprietaire);
    }
    loginClient(proprietaire: Client) {
      return this.http.post<any>(this.loginClientUrl, proprietaire);
    }
    getClient():Observable<Client[]>{
      return this.http.get<Client[]>(this.apiUrl+"/client")  
    }
    deleteClient(id:number|undefined){
      const Url=`${this.apiUrl+"/client"}/${id}`
      return this.http.delete(Url,httpOption)
    }
    updateClient(id:number,client:Client):Observable<Client>{
      const Url=`${this.apiUrl+"/client"}/${id}`
      return this.http.put<Client>(Url,client,httpOption)
    }

    geClientById(id : number):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/client/${id}`);
    }
   
    /***********       Projet      ************** */
   
 
  addProjet(projet:Projet){
    return this.http.post<any>(this.apiUrl+"/projet", projet);
  }
  getProjetByClient(id:number):Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl}/projet/list-animal-by-prop/${id}`)  
  }
  getProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(this.apiUrl+"/projet");
  }
  public getProjetById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/projet/${id}`);
  
  }
  updateProjet(id:number,projet:Projet):Observable<Projet>{
    const Url=`${this.apiUrl+"/projet"}/${id}`
    return this.http.put<Projet>(Url,projet,httpOption)
  }
  deleteProjet(id:number|undefined){
    const Url=`${this.apiUrl+"/projet"}/${id}`
    return this.http.delete(Url,httpOption)
  }


   /***********       Demande      ************** */
   
 
   addDemande(demande:Demande){
    return this.http.post<any>(this.apiUrl+"/demande", demande);
  }
  getDemandeByProjet(id:number):Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl}/demande/list-Demande-by-proj/${id}`)  
  }
  getDemande():Observable<Demande[]>{
    return this.http.get<Demande[]>(this.apiUrl+"/demande");
  }
  public getDemandeById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/demande/${id}`);
  
  }
  updateDemande(id:number,demande:Demande):Observable<Demande>{
    const Url=`${this.apiUrl+"/demande"}/${id}`
    return this.http.put<Demande>(Url,demande,httpOption)
  }
  deleteDemande(id:number|undefined){
    const Url=`${this.apiUrl+"/demande"}/${id}`
    return this.http.delete(Url,httpOption)
  }

  /****************     Mise à Jours    ********************** */
  addMisejour(misejour:Misejour){
    return this.http.post<any>(this.apiUrl+"/misejour", misejour);
  }
  getMisejour():Observable<Misejour[]>{
    return this.http.get<Misejour[]>(this.apiUrl+"/misejour");
  }
  public getMisejourById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/misejour/${id}`);
}
getMisejourByDemande(id:number):Observable<any[]>{
  return this.http.get<any>(`${this.apiUrl}/misejour/list-misejour-by-demande/${id}`)  
}


}