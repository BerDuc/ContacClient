import { Client } from './Client';
import { Professionnel } from './Professionnel';
import { Tag } from './Tag';

export interface Prestation {
    prestation_ID: number;
    titre: string;
    lieu: string;
    description: string;
    type: string;
    retribution: number;
    date: Date;
    client_Id : number;
    beneficiaire: Client;
    pro_Id: number; 
    prestataire: Professionnel;
    tags: Tag[];
}