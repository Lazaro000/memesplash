import { ApplicationConflictException } from "./application-conflict.exception";

export class UserEmailAlreadyInUseException extends ApplicationConflictException {
    constructor(){
        super('El Email de usuario ya está en uso');
    }
}