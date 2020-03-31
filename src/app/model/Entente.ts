import { Professionnel } from './Professionnel';
import { Client } from './Client';
import { Message } from './Message';

export interface Entente {
    entente_ID: number;
    pro_ID: number;
    pro: Professionnel;
    client_ID: number;
    client : Client;
    approuvePro : boolean;
    approuveClient: boolean;

    messages: Message[];
}