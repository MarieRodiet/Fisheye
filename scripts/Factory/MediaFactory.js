import ImageTemplate from "./../templates/ImageTemplate.js";
import VideoTemplate from "./../templates/VideoTemplate.js"

export default class MediaFactory {
    constructor(media, name) {
        this.type = media;
        this.name = name;
        if (this.type.image) {
            return new ImageTemplate(media, name);
        }
        else if (this.type.video) {
            return new VideoTemplate(media, name);
        }
        else {
            throw "unknown type format";
        }
    }
}