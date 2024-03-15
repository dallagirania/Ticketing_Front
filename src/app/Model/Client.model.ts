import { Projet } from "./Projet.model";

export class Client{
    constructor(
        public id?:number,
        public nom?:String ,
        public domain?:String ,
        public adresse?:String ,
        public tel?:String,
        public fax?:String,   
        public site?:String ,
        public directeur?:String ,
        public directeur_fon?:String ,
        public directeur_email?:String,
        public consultant?:String,
        public consultant_fon?:String ,
        public consultant_email?:String ,
        public email?:String,
        public mdp?:String,
        public img?:String,
        public projet:Projet[]=[],      
    ){
    }
}
