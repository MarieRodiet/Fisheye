import ImageTemplate from "./../templates/ImageTemplate.js";
import VideoTemplate from "./../templates/VideoTemplate.js"

export default class MediaFactory {
    constructor(media, name) {
        this.type = media;
        this.name = name;
        return this.type.image ? new ImageTemplate(media, name) : new VideoTemplate(media, name);
    }
}