const Legend = require("./Legend");
class Player {
    constructor(global, realtime, legends, mozambiquehere_internal, total) {
        this.global = {
            name: global.name ?? null,
            uid: global.uid ?? null,
            avatar: global.avatar ?? null,
            platform: global.platform ?? null,
            level: global.level ?? null,
            toNextLevelPercent: global.toNextLevelPercent ?? null,
            internalUpdateCount: global.internalUpdateCount ?? null,
            bans: {
                isActive: global.bans.isActive ?? false,
                remainingSeconds: global.bans.remainingSeconds ?? null,
                last_banReason: global.bans.last_banReason ?? null,
            },
            rank: {
                rankScore: global.rank.rankScore ?? null,
                rankName: global.rank.rankName ?? null,
                rankDiv: global.rank.rankDiv ?? null,
                ladderPosPosition: global.rank.ladderPosPosition ?? null,
                rankImg: global.rank.rankImg ?? null,
                rankedSeason: global.rank.rankedSeason ?? null,
            },
            arena: {
                rankScore: global.arena.rankScore ?? null,
                rankName: global.arena.rankName ?? null,
                rankDiv: global.arena.rankDiv ?? null,
                ladderPosPosition: global.arena.ladderPosPosition ?? null,
                rankImg: global.arena.rankImg ?? null,
                rankedSeason: global.arena.rankedSeason ?? null,
            },
            battlepass: {
                level: global.battlepass.level ?? null,
                history: {
                    season1: global.battlepass.history.season1 ?? null,
                    season2: global.battlepass.history.season2 ?? null,
                    season3: global.battlepass.history.season3 ?? null,
                    season4: global.battlepass.history.season4 ?? null,
                    season5: global.battlepass.history.season5 ?? null,
                    season6: global.battlepass.history.season6 ?? null,
                    season7: global.battlepass.history.season7 ?? null,
                    season8: global.battlepass.history.season8 ?? null,
                    season9: global.battlepass.history.season9 ?? null,
                    season10: global.battlepass.history.season10 ?? null,
                }
            },
            badges: global.badges.map((badge) => {return {
                name: badge.name ?? null,
                value: badge.value ?? null,
            }}),
        }
        this.realtime = {
            lobbyState: realtime.lobbyState ?? null,
            isOnline: realtime.isOnline ?? null,
            isInGame: realtime.isInGame ?? null,
            canJoin: realtime.canJoin ?? null,
            partyFull: realtime.partyFull ?? null,
            selectedLegend: realtime.selectedLegend ?? null,
            currentState: realtime.currentState ?? null,
            currentStateSinceTimestamp: realtime.currentStateSinceTimestamp ?? null,
            currentStateAsText: realtime.currentStateAsText ?? null,
        };
        this.legends = {
            selected: {
                LegendName: legends.selected.LegendName ?? null,
                data: legends.selected.data.map((d) => {return {
                    name: d.name ?? null,
                    value: d.value ?? null,
                    key: d.key ?? null,
                }}),
                gameInfo: {
                    skin: legends.selected.gameInfo.skin ?? null,
                    skinRarity: legends.selected.gameInfo.skinRarity ?? null,
                    frame: legends.selected.gameInfo.frame ?? null,
                    frameRarity: legends.selected.gameInfo.frameRarity ?? null,
                    pose: legends.selected.gameInfo.pose ?? null,
                    poseRarity: legends.selected.gameInfo.poseRarity ?? null,
                    intro: legends.selected.gameInfo.intro ?? null,
                    introRarity: legends.selected.gameInfo.introRarity ?? null,
                    badges: legends.selected.gameInfo.badges.map((d) => {return {
                        name: badge.name ?? null,
                        value: badge.value ?? null,
                        category: badge.category ?? null,
                    }}),
                },
                ImgAssets: {
                    icon: legends.select.ImgAssets.icon ?? null,
                    banner: legends.select.ImgAssets.banner ?? null,
                },
            },
            all: {
                Revanant: new Legend(legends.all.Revanant.data, legends.all.Revanant.gameInfo,legends.all.Revanant.ImgAssets),
                Crypto: new Legend(legends.all.Crypto.data, legends.all.Crypto.gameInfo,legends.all.Crypto.ImgAssets),
                Horizon: new Legend(legends.all.Horizon.data, legends.all.Horizon.gameInfo,legends.all.Horizon.ImgAssets),
                Gibraltar: new Legend(legends.all.Gibraltar.data, legends.all.Gibraltar.gameInfo,legends.all.Gibraltar.ImgAssets),
                Wattson: new Legend(legends.all.Wattson.data, legends.all.Wattson.gameInfo,legends.all.Wattson.ImgAssets),
                Fuse: new Legend(legends.all.Fuse.data, legends.all.Fuse.gameInfo,legends.all.Fuse.ImgAssets),
                Bangalore: new Legend(legends.all.Bangalore.data, legends.all.Bangalore.gameInfo,legends.all.Bangalore.ImgAssets),
                Wraith: new Legend(legends.all.Wraith.data, legends.all.Wraith.gameInfo,legends.all.Wraith.ImgAssets),
                Octane: new Legend(legends.all.Octane.data, legends.all.Octane.gameInfo,legends.all.Octane.ImgAssets),
                Bloodhound: new Legend(legends.all.Bloodhound.data, legends.all.Bloodhound.gameInfo,legends.all.Bloodhound.ImgAssets),
                Caustic: new Legend(legends.all.Caustic.data, legends.all.Caustic.gameInfo,legends.all.Caustic.ImgAssets),
                Lifeline: new Legend(legends.all.Lifeline.data, legends.all.Lifeline.gameInfo,legends.all.Lifeline.ImgAssets),
                Pathfinder: new Legend(legends.all.Pathfinder.data, legends.all.Pathfinder.gameInfo,legends.all.Pathfinder.ImgAssets),
                Mirage: new Legend(legends.all.Mirage.data, legends.all.Mirage.gameInfo,legends.all.Mirage.ImgAssets),
                Rampart: new Legend(legends.all.Rampart.data, legends.all.Revanant.gameInfo,Rampart.all.Rampart.ImgAssets),
                Valkyrie: new Legend(legends.all.Valkyrie.data, legends.all.Valkyrie.gameInfo,legends.all.Valkyrie.ImgAssets),
                Seer: new Legend(legends.all.Seer.data, legends.all.Seer.gameInfo,legends.all.Seer.ImgAssets),
            },
        }
        this.mozambiquehere_internal = {
            isNewToDB: mozambiquehere_internal.isNewToDB ?? true,
            claimedBy: mozambiquehere_internal.claimedBy ?? null,
            APIAccessType: mozambiquehere_internal.APIAccessType ?? null,
            ClusterID: mozambiquehere_internal.ClusterID ?? null,
            rate_limit: {
                max_per_second: mozambiquehere_internal.rate_limit.max_per_second ?? null,
                current_req: mozambiquehere_internal.rate_limit.current_req ?? null,
            },
            clusterSrv: mozambiquehere_internal.clusterSrv ?? null,
        };
        this.total = total;
    };
};
module.exports = Player;