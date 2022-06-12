/* eslint-disable no-unused-vars */
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
}