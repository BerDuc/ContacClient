import { Utilisateur } from './Utilisateur';
import { Expertise } from './Expertise';
import { Prestation } from './Prestation';
import { Entente } from './Entente';


export class Professionnel extends Utilisateur {
    private _addrCv: string;
    
    private _expertises: Expertise[];
   
    private _ententes: Entente[];
    
    private _prestations: Prestation[];    
    

    constructor(){ super(); }

    public get addrCv(): string {
        return this._addrCv;
    }
    public set addrCv(value: string) {
        this._addrCv = value;
    }
    public get expertises(): Expertise[] {
        return this._expertises;
    }
    public set expertises(value: Expertise[]) {
        this._expertises = value;
    }

    public get ententes(): Entente[] {
        return this._ententes;
    }
    public set ententes(value: Entente[]) {
        this._ententes = value;
    }

    public get prestations(): Prestation[] {
        return this._prestations;
    }
    public set prestations(value: Prestation[]) {
        this._prestations = value;
    }
    
 


   //méthodes
    public toJSON (): any {
        return {
            "UtilisateurID": this.utilisateurID,
            "nom": this.nom,
            "prenom": this.prenom,
            "addrPhoto": this.addrPhoto,
            "courriel": this.courriel,
            "mdp": this.mdp,
            "messages_Recus": this.messages_Recus,
            "messages_Envoyes": this.messages_Envoyes,
            "expertises": this._expertises,
            "ententes": this._ententes,
            "prestations": this._prestations
        }
/*
private _addrCv: string;
    
    private _expertises: Expertise[];
   
    private _ententes: Entente[];
    
    private _prestations: Prestation[];   
*/

}
}
