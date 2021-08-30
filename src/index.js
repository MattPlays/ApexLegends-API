const fetch = require('node-fetch');
const Player = require("./Player");
const MapRotation = require("./MapRotation");
const News = require("./News");
const ServerStatusResponse = require('./ServerStatusResponse');
const NameToUIDResponse = require("./NameToUIDResponse");
class ApexLegendsAPI {
    /**
     * 
     * @param {string} authKey 
     */
    constructor(authKey) {
        this.api = "https://api.mozambiquehe.re/",
        this.authKey = authKey
        this.offical = true
    }
    /**
     * 
     * @param {string} platform 
     * @param {string[]} players 
     * @returns {Promise<Player[]>} 
     */
    GetPlayerStatsByName(platform, players) {
        let url = this.api + `bridge?version=5&platform=${platform}&player=${[...[players]].join()}&auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors",
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new Player(d.global, d.realtime, d.legends, d.mozambiquehere_internal, d.total)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} platform 
     * @param {string[]} uids 
     * @returns {Promise<Player[]>}
     */
    GetPlayerStatsByUID(platform, uids) {
        let url = this.api + `bridge?version=5&platform=${platform}&player=${[...[uids]].join()}&auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors",
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new Player(d.global, d.realtime, d.legends, d.mozambiquehere_internal, d.total)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * @returns {Promise<MapRotation>}
     */
    GetMapRotation() {
        let url = this.api + `maprotation?version=2&auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new MapRotation(data.battle_royale, data.arenas, data.ranked, data.arenasRanked);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @returns {Promise<News[]>}
     */
    GetNews() {
        let url = this.api + `news?lang=en-us&auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new News(d.title, d.link, d.img, d.short_desc)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @returns {Promise<ServerStatusResponse>}
     */
    GetServerStatus() {
        let url = this.api + `servers?auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then(res => {
            return new ServerStatusResponse("Data from apexlegendsstatus.com", res)
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} name 
     * @param {string} platform 
     * @returns {Promise<NameToUIDResponse>}
     */
    NameToUID(name, platform) {
        let url = this.api + `nametouid?player=${name}&platform=${platform}&auth=${this.authKey}`
        return fetch(url, {
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new NameToUIDResponse(data.name, data.uid, data.pid, data.avatar);
        }).catch((err) => {throw new Error(err)});
    }
}

module.exports = {
    ApexLegendsAPI: ApexLegendsAPI
}