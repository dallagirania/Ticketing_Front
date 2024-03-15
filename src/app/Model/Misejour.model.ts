import { Demande } from "./Demande.model";
export class Misejour{
    constructor(
        public id?:number,
        public datemodif?:String ,
        public nom?:String ,
        public prenom?:String ,
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
        public dev:number[]=[],  
        public demande?:Demande, 
        public facture?:String ,
    ){
    }
}

