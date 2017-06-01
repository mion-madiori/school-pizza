import { Pizza } from './pizza'

export interface Command{
    listPizza: Array<Pizza>;
    firstname: String;
    lastname: String;
    phone: String;
}