import { Utilisateur } from './Utilisateur';
import { Prestation } from './Prestation';
import { Entente } from './Entente';

export interface Client extends Utilisateur {
    institution: string;
    ententes: Entente[];
    prestations: Prestation[];
}