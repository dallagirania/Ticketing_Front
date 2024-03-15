import { Misejour } from "./Misejour.model";
import { Projet } from "./Projet.model";

export class Demande{
    constructor(
        public id?:number,
        public tracker?:String ,
        public sujet?:String ,
        public description?:String,
        public statut?:String,  
        public priorite?:String, 
        public assigne?:String ,
        public version?:String ,
        public tache_patent?:String,
        public datedeb?:String,  
        public echeance?:String, 
        public temps_estime?:String ,
        public facture?:String,
        public cv?:String,  
        public projet?:Projet, 
        public misejour:Misejour[]=[], 
    ){
    }
}

