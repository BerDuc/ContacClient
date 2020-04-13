import { Message } from './Message';

export class Utilisateur {
    private _utilisateur_ID : number;
    private _nom : string;
    private _prenom: string;
    private _addrPhoto: string; 
    private _courriel: string;    
    private _mdp: string;
    
    private _messages_Recus: Message[];
    private _messages_Envoyes : Message[];

    constructor(){}
   
    public get utilisateur_ID() : number {
        return this._utilisateur_ID;
    }

    public set utilisateur_ID(id: number) {
        this._utilisateur_ID = id;
    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nom: string){
        this._nom = nom;
    }

    public get prenom(): string {
        return this._prenom;
    }

    public set prenom(value: string) {
        this._prenom = value;
    }

    public get addrPhoto(): string {
        return this._addrPhoto;
    }
    public set addrPhoto(value: string) {
        this._addrPhoto = value;
    }
    
    public get courriel(): string {
        return this._courriel;
    }
    public set courriel(value: string) {
        this._courriel = value;
    }

    public get mdp(): string {
        return this._mdp;
    }
    public set mdp(value: string) {
        this._mdp = value;
    }

    public get messages_Recus(): Message[] {
        return this._messages_Recus;
    }
    public set messages_Recus(value: Message[]) {
        this._messages_Recus = value;
    }

    
}