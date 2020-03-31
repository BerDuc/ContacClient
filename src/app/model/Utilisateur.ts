import { Message } from './Message';

export interface Utilisateur {
    utilisateur_ID : number;
    nom : string;
    prenom : string;
    addrPhoto : string; 
    courriel: string;
    mdp: string;

    
    messages_Recus : Message[];
    messages_Envoyes : Message[];
}