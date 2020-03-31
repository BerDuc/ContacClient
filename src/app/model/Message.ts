import { Utilisateur } from './Utilisateur';
import { Entente } from './Entente';

export interface Message {
    message_ID : number;
    auteur_Id : number;
    auteur: Utilisateur;
    destinataire_Id : number;
    destinataire: Utilisateur;
    titre: string; 
    contenu: string;
    lu: boolean;
    entente_ID: number;
    entente_Associee : Entente;
}