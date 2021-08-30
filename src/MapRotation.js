class MapRotation {
    constructor(battle_royale, arenas, ranked, arenasRanked) {
        this.battle_royale = {
            current: {
                start: battle_royale.current.start ?? null,
                end: battle_royale.current.end ?? null,
                readableDate_start: battle_royale.current.readableDate_start ?? null,
                readableDate_end: battle_royale.current.readableDate_end ?? null,
                map: battle_royale.current.map ?? null,
                DurationInSecs: battle_royale.current.DurationInSecs ?? null,
                DurationInMinutes: battle_royale.current.DurationInMinutes ?? null,
                remainingSecs: battle_royale.current.remainingSecs ?? null,
                reaminingMins: battle_royale.current.reaminingMins ?? null,
                remainingTimer: battle_royale.current.remainingTimer ?? null,
            },
            next: {
                start: battle_royale.next.start ?? null,
                end: battle_royale.next.end ?? null,
                readableDate_start: battle_royale.next.readableDate_start ?? null,
                readableDate_end: battle_royale.next.readableDate_end ?? null,
                map: battle_royale.next.map ?? null,
                DurationInSecs: battle_royale.next.DurationInSecs ?? null,
                DurationInMinutes: battle_royale.next.DurationInMinutes ?? null,
            },
        };
        this.arenas = {
            current: {
                start: arenas.current.start ?? null,
                end: arenas.current.end ?? null,
                readableDate_start: arenas.current.readableDate_start ?? null,
                readableDate_end: arenas.current.readableDate_end ?? null,
                map: arenas.current.map ?? null,
                DurationInSecs: arenas.current.DurationInSecs ?? null,
                DurationInMinutes: arenas.current.DurationInMinutes ?? null,
                remainingSecs: arenas.current.remainingSecs ?? null,
                reaminingMins: arenas.current.reaminingMins ?? null,
                remainingTimer: arenas.current.remainingTimer ?? null,
            },
            next: {
                start: arenas.next.start ?? null,
                end: arenas.next.end ?? null,
                readableDate_start: arenas.next.readableDate_start ?? null,
                readableDate_end: arenas.next.readableDate_end ?? null,
                map: arenas.next.map ?? null,
                DurationInSecs: arenas.next.DurationInSecs ?? null,
                DurationInMinutes: arenas.next.DurationInMinutes ?? null,
            },
        };
        this.ranked = {
            current: {
                map: ranked.current.map ?? null,
            },
            next: {
                map: ranked.next.map ?? null
            },
        };
        this.arenasRanked = {
            current: {
                start: arenasRanked.current.start ?? null,
                end: arenasRanked.current.end ?? null,
                readableDate_start: arenasRanked.current.readableDate_start ?? null,
                readableDate_end: arenasRanked.current.readableDate_end ?? null,
                map: arenasRanked.current.map ?? null,
                DurationInSecs: arenasRanked.current.DurationInSecs ?? null,
                DurationInMinutes: arenasRanked.current.DurationInMinutes ?? null,
                remainingSecs: arenasRanked.current.remainingSecs ?? null,
                reaminingMins: arenasRanked.current.reaminingMins ?? null,
                remainingTimer: arenasRanked.current.remainingTimer ?? null,
            },
            next: {
                start: arenasRanked.next.start ?? null,
                end: arenasRanked.next.end ?? null,
                readableDate_start: arenasRanked.next.readableDate_start ?? null,
                readableDate_end: arenasRanked.next.readableDate_end ?? null,
                map: arenasRanked.next.map ?? null,
                DurationInSecs: arenasRanked.next.DurationInSecs ?? null,
                DurationInMinutes: arenasRanked.next.DurationInMinutes ?? null,
            },
        };
    }
}
module.exports = MapRotation;