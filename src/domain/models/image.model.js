/* eslint-disable no-unused-vars */
/**
 * Image uploaded in the application
 */
export class ImageModel {
    /**
     * Constructor
     * @param {String} title Image unique identifier
     * @param {String} id Image title
     * @param {String} src Image filename
     * @param {ImageFormat} format Image formate
     * @param {String} size Image size in
     * @param {String} height Image height in pixels
     * @param {String} width Image width in pixels
     * @param {String} createdAt Images creation date
     */
    constructor(id, title, src, format, size, height, width, createdAt){
        this.id = id;
        this.title = title;
        this.src = src;
        this.format = format;
        this.size = size;
        this.height = height;
        this.width = width;
        this.createdAt = createdAt;
    }

}