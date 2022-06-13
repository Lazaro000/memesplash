/* eslint-disable no-unused-vars */
import { UserModel } from '../../domain/models/user.model'
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { UserEmailAlreadyInUseException } from '../errors/user-email-already-in-use.exception';
import { UserIdAlreadyInUseException } from '../errors/user-id-already-in-use.exception copy';

const userRegisterUseCase = async (id, name, email, password) => {
    const newUser = await UserModel.create(id, name, email, password);

    // TODO: Comprobar si existe Id duplicado
    const existingUserById = await UserRepository.findById(id);
    if(existingUserById){
        throw new UserIdAlreadyInUseException();
    }

    // TODO: Comprobar si existe email duplicado
    const existingUserByEmail = await UserRepository.findByEmail(email);
    if(existingUserByEmail){
        throw new UserEmailAlreadyInUseException();
    }

    // TODO: Persistir el nuevo usuario
    await UserRepository.create(newUser);
}