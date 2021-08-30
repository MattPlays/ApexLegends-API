class NameToUIDResponse {
    /**
     * 
     * @param {string} name 
     * @param {string} uid 
     * @param {string} pid 
     * @param {string} avatar 
     */
    constructor(name, uid, pid, avatar) {
        this.name = name;
        this.uid = uid;
        this.pid = pid;
        this.avatar = avatar;
    }
}
module.exports = NameToUIDResponse;