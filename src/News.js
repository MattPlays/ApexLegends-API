class News {
    /**
     * 
     * @param {string} title 
     * @param {string} link 
     * @param {string} img 
     * @param {string} short_desc 
     */
    constructor(title, link, img, short_desc) {
        this.title = title;
        this.link = link;
        this.img = img;
        this.short_desc = short_desc;
    }
}
module.exports = News;