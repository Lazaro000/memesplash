import { DomainFormatException } from "./domain-format.exception";

export class InvalidNameFormatException extends DomainFormatException {
    constructor(){
        super('Formato de Name inválido');
    }
}