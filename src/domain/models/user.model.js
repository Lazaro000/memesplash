/* eslint-disable no-unused-vars */

import uuid from 'uuid-random';
import { InvalidIdFormatException } from '../errors/invalid-id-format.exception';
import { InvalidEmailFormatException } from '../errors/invalid-email-format.exception';
import { InvalidNameFormatException } from '../errors/invalid-name-format.exception';
import { InvalidPasswordFormatException } from '../errors/invalid-password-format.exception';
import { hash } from 'bcrypt';

const HASH_SALT = 10;

/**
 * Registered user in the application
 */
export class UserModel {
    /**
     * Constructor
     * @param {String} id User's unique identifier
     * @param {String} name User's name
     * @param {String} email User's email
     * @param {String} password User's hashed password
     * @param {String} profilePic User's profile picture URL
     * @param {String[]} images User's uploaded image IDs
     */
    constructor(id, name, email, password, profilePic, images){
        this.id = id;
        this.password = password;
        this.email = email;
        this.name = name;
        this.profilePic = profilePic;
        this.images = images;
    }

    validateId(id){
        return uuid.test(id);
    }

    validateName(name){
        const nameRegex =
            /^(?![\s-'])(?!.*[\s-']{2})(?!.*[\s-']$)[A-ZÀ-ÖØ-öø-ÿ\s-']{2,30}$/i;

        return nameRegex.test(name);
    }

    validateEmail(email){
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return emailRegex.test(email);
    }

    validatePassword(password){
        return (
            password.length >= 8 &&
            password.length <= 30 &&
            !password.includes(' ')
        );
    }

    static async create(id, name, email, password){
        if(!UserModel.validateId(id))
            throw new InvalidIdFormatException();
        if(!UserModel.validateName(name)){
            throw new InvalidNameFormatException();
        }
        if(!UserModel.validateEmail(email)){
            throw new InvalidEmailFormatException();
        }
        if(!UserModel.validatePassword(password)){
            throw new InvalidPasswordFormatException();
        }
        const hashedPassword = await hash(password, HASH_SALT);

        return new UserModel(id, name, email, hashedPassword, undefined, []);
    }
}