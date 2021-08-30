export interface Player {
    global: {
        name: string,
        uid: number,
        avatar: string,
        platform: string,
        level: number,
        toNextLevelPercent: number,
        internalUpdateCount: number,
        bans: {
            isActive: boolean,
            remainingSeconds: number,
            last_banReason: string
        },
        rank: {
            rankScore: number,
            rankName: string,
            rankDiv: number,
            ladderPosPosition: number,
            rankImg: string,
            rankedSeason: string
        },
        arena: {
            rankScore: number,
            rankName: string,
            rankDiv: number,
            ladderPosPosition: number,
            rankImg: string,
            rankedSeason: string
        }
        battlepass: {
            level: string,
            history: {
                season1: number,
                season2: number,
                season3: number,
                season4: number,
                season5: number,
                season6: number,
                season7: number,
                season8: number,
                season9: number,
                season10: number,
            }
        },
        badges: [
            {name: string, value: number}
        ]
    },
    realtime: {
        lobbyState: string,
        isOnline: number,
        isInGame: number,
        canJoin: number,
        partyFull: number,
        selectedLegend: string,
        currentState: string,
        currentStateSinceTimestamp: number,
        currentStateAsText: string
    },
    legends: {
        selected: {
            LegendName: string,
            data: [
                {name: string, value: number, key: string}
            ],
            gameInfo: {
                skin: string,
                skinRarity: string,
                frame: string,
                frameRarity: string,
                pose: string,
                poseRarity: string,
                intro: string,
                introRarity: string,
                badges: [
                    {name: string, value: number, category: string},
                ]
            },
            ImgAssets: {
                icon: string,
                banner: string
            }
        },
        all: {
            Revenant: Legend,
            Crypto: Legend,
            Horizon: Legend,
            Gibraltar: Legend,
            Wattson: Legend,
            Fuse: Legend,
            Bangalore: Legend,
            Wraith: Legend,
            Octane: Legend,
            Bloodhound: Legend,
            Caustic: Legend,
            Lifeline: Legend,
            Pathfinder: Legend,
            Mirage: Legend,
            Rampart: Legend,
            Valkyrie: Legend,
            Seer: Legend
        }
    },
    mozambiquehere_internal: {
        isNewToDB: boolean,
        claimedBy: string,
        APIAccessType: string,
        ClusterID: string,
        rate_limit: {
            max_per_second: number,
            current_req: string
        },
        clusterSrv: string
    },
    total: {
        // Unpredictable
        // Would need a player who has done X of everything
    }
}