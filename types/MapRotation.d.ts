export interface MapRotation {
    battle_royale: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    },
    arenas: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    },
    ranked: {current: {map: string}, next: {map: string}},
    arenasRanked: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    }
}