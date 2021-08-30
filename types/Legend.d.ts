export interface Legend {
    data: [
        {
            name: string,
            value: number,
            key: string,
            rank: {rankPos: number, topPercent: number},
            rankPlatformSpecific: {rankPos: number, topPercent: number}
        },
    ],
    gameInfo: {
        badges: {name: string, value: number}[]
    }
    ImgAssets: {icon: string, banner: string}
}