import { Professionnel } from './Professionnel';

export interface Expertise {
    expertise_ID : number;
    valeur : string;
    professionnels : Professionnel[];
}