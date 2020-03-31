import { Utilisateur } from './Utilisateur';
import { Expertise } from './Expertise';
import { Prestation } from './Prestation';
import { Entente } from './Entente';


export interface Professionnel extends Utilisateur {
    addrCv : string;
    expertises : Expertise[];
    ententes : Entente[];
    prestations : Prestation[];    
}