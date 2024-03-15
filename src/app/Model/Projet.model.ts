import { Client } from "./Client.model";
import { Demande } from "./Demande.model";

export class Projet{
    constructor(
        public id?:number,
        public nom?:String ,
        public datedeb?:String ,
        public domaine?:String,
        public description?:String,  
        public client?:Client, 
        public demande:Demande[]=[],  
    ){
    }
}