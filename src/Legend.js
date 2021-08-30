class Legend {
    /**
     * 
     * @param {{name: string, value: number, key: string, rank: {rankPos: number, topPercent: number}, rankPlatformSpecific: {rankPos: number, topPercent: number}}[]} data 
     * @param {{badges: {name: string, value: number}[]}} gameInfo 
     * @param {{icon: string, banner: string}} ImgAssets 
     * @returns {Legend}
     */
    constructor(data, gameInfo, ImgAssets) {
        this.data = data.map((d) => {return {
            name: d.name ?? null,
            value: d.value ?? null,
            key: d.key ?? null,
            rank: {
                rankPos: d.rank.rankPos ?? null,
                topPercent: d.rank.topPercent ?? null,
            },
            rankPlatformSpecific: {
                rankPos: d.rankPlatformSpecific.rankPos ?? null,
                topPercent: d.rankPlatformSpecific.topPercent ?? null,
            },
        }});
        this.gameInfo = {
            badges: gameInfo.badges.map((badge) => {return {
                name: badge.name ?? null,
                value: badge.value ?? null,
            }}),
        };
        this.ImgAssets = {
            icon: ImgAssets.icon,
            banner: ImgAssets.banner,
        };
    }
}
module.exports = Legend;