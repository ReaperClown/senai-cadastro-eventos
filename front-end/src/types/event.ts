import { Moment } from 'moment';
import { Participant } from './participant';

export type Event = {
    nomeEvento: string;
    participantes: number;
    data: Moment;
    horario: Array<Moment>;
    participant: Participant;
  };
  
  export type EventPage = {
    content?: Event[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
  }