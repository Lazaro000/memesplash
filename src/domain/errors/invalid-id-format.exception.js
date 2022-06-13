import { DomainFormatException } from "./domain-format.exception";

export class InvalidIdFormatException extends DomainFormatException {
    constructor(){
        super('Formato de Id inválido');
    }
}