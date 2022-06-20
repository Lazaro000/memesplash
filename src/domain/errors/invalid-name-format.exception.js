import { DomainFormatException } from "./domain-format.exception.js";

export class InvalidNameFormatException extends DomainFormatException {
    constructor(){
        super('Formato de Name inválido');
    }
}