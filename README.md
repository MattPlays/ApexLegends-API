# ApexLegends-API
This package is a wrapper for the Apex Legends(Mozambiquehe) API

1. [Apex Legends](#apex-legends)
   1. [Usage](#apex-legends-usage)
   2. [Functions](#apex-legends-functions)
      1. [GetPlayerStatsByName](#apex-legends-getplayerstatsbyname)
          1. [Inputs](#apex-legends-getplayerstatsbyname-inputs)
          2. [Output](#apex-legends-getplayerstatsbyname-output)
          3. [Usage](#apex-legends-getplayerstatsbyname-usage)
      2. [GetPlayerStatsByUID](#apex-legends-getplayerstatsbyuid)
          1. [Inputs](#apex-legends-getplayerstatsbyuid-inputs)
          2. [Output](#apex-legends-getplayerstatsbyuid-output)
          3. [Usage](#apex-legends-getplayerstatsbyuid-usage)
      3. [GetMapRotation](#apex-legends-getmaprotation)
          1. [Output](#apex-legends-getmaprotation-output)
          2. [Usage](#apex-legends-getmaprotation-usage)
      4. [GetNews](#apex-legends-getnews)
          1. [Output](#apex-legends-getnews-output)
          2. [Usage](#apex-legends-getnews-usage)
      5. [GetServerStatus](#apex-legends-getserverstatus)
          1. [Output](#apex-legends-getserverstatus-output)
          2. [Usage](#apex-legends-getserverstatus-usage)
      6. [NameToUID](#apex-legends-nametouid)
      	  1. [Inputs](#apex-legends-nametouid-inputs)
      	  2. [Output](#apex-legends-nametouid-output)
      	  3. [Usage](#apex-legends-nametouid-usage)
    3. [Return Types](#apex-legends-returntypes)
    	1. [Player](#apex-legends-returntypes-player)
            1. [Legend](#apex-legends-returntypes-legend)
    	2. [MapRotation](#apex-legends-returntypes-maprotation)
    	3. [News](#apex-legends-returntypes-news)
    	4. [ServerStatusResponse](#apex-legends-returntypes-serverstatusresponse)
            1. [ServerStatus](#apex-legends-returntypes-serverstatusresponse-serverstatus)
    	5. [NameToUIDResponse](#apex-legends-returntypes-nametouidresponse)

## Apex Legends
**This is an Unoffical API** [Unoffical Docs](https://apexlegendsapi.com/documentation.php)
### Usage <a id="apex-legends-usage">
```javascript
const {ApexLegendsAPI} = require("@mattplays/apexlegends-api")
const API = new ApexLegendsAPI("DUMMYAPIKEY");
```
### Functions <a id="apex-legends-functions">
#### GetPlayerStatsByName <a id="apex-legends-getplayerstatsbyname">
##### Inputs <a id="apex-legends-getplayerstatsbyname-inputs">
| Input  | Type |
| ------------- | ------------- |
| platform  |`string`  |
| players  |`string[]`  |
##### Output <a id="apex-legends-getplayerstatsbyname-output">
The GetPlayerStatsByName function returns a `Promise<Player[]>` type
##### Usage <a id="apex-legends-getplayerstatsbyname-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.GetPlayerStatsByName("PC", ["DUMMYPLAYER1", "DUMMYPLAYER2"]).then((data) => {
// Your Code Here :D
});
```
#### GetPlayerStatsByUID <a id="apex-legends-getplayerstatsbyuid">
##### Inputs <a id="apex-legends-getplayerstatsbyuid-inputs">
| Input  | Type |
| ------------- | ------------- |
| platform  |`string`  |
| uids  |`string[]`  |
##### Output <a id="apex-legends-getplayerstatsbyuid-output">
The GetPlayerStatsByUID function returns a `Promise<Player[]>` type
##### Usage <a id="apex-legends-getplayerstatsbyuid-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.GetPlayerStatsByName("PC", ["1000575543540"]).then((data) => {
// Your Code Here :D
});
```
#### GetMapRotation <a id="apex-legends-getmaprotation">
##### Output <a id="apex-legends-getmaprotation-output">
The GetMapRotation function returns a `Promise<MapRotation>` type
##### Usage <a id="apex-legends-getmaprotation-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.GetMapRotation().then((data) => {
// Your Code Here :D
})
```
#### GetNews <a id="apex-legends-getnews">
##### Output <a id="apex-legends-getnews-output">
The GetNews function returns a `Promise<News[]>` type
##### Usage <a id="apex-legends-getnews-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.GetNews().then((data) => {
// Your Code Here :D
});
```
#### GetServerStatus <a id="apex-legends-getserverstatus">
##### Output <a id="apex-legends-getserverstatus-output">
The GetServerStatus function returns a `Promise<ServerStatusResponse>` type
##### Usage <a id="apex-legends-getserverstatus-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.GetServerStatus().then((data) => {
// Your Code Here :D
});
```
#### NameToUID <a id="apex-legends-nametouid">
##### Inputs <a id="apex-legends-nametouid-inputs">
| Input  | Type |
| ------------- | ------------- |
| name  |`string`  |
| platform  |`string`  |
##### Output <a id="apex-legends-nametouid-output">
The NameToUID function returns a `Promise<NameToUIDResponse>` type
##### Usage <a id="apex-legends-nametouid-usage">
```javascript
const API = new ApexLegendsAPI("DUMMYAPIKEY");
API.NameToUID("DUMMYPLAYER1", "PC").then((data) => {
// Your Code Here :D
});
```

### Return Types <a id="apex-legends-returntypes">
#### Player <a id="apex-legends-returntypes-player">
##### Legend <a id="apex-legends-returntypes-legend">
```typescript
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
```
```typescript
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
```
#### MapRotation <a id="apex-legends-returntypes-maprotation">
```typescript
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
```
#### News <a id="apex-legends-returntypes-news">
```typescript
export interface News {
    title: string,
    link: string,
    img: string,
    short_desc: string,
}
```
#### ServerStatusResponse <a id="apex-legends-returntypes-serverstatusresponse">
##### ServerStatus <a id="apex-legends-returntypes-serverstatusresponse-serverstatus">
```typescript
interface ServerStatus {
    Status: string,
    HTTPCode: number,
    ResponseTime: number,
    QueryTimestamp: number
}
```
```typescript
export interface ServerStatusResponse {
    Message: string,
    data: {
        Origin_login: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        EA_novafusin: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        EA_accounts: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        ApexOauth_Crossplay: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        selfCoreTest: {
            'Status-website': ServerStatus,
            'Stats-API': ServerStatus,
            'Overflow-#1': ServerStatus,
            'Overflow-#2': ServerStatus,
            'Origin-API': ServerStatus,
            'Playstation-API': ServerStatus,
            'Xbox-API': ServerStatus
        },
        otherPlatforms: {
            'Playstation-Network': ServerStatus, 
            'Xbox-Live': ServerStatus
        }
    }
}
```
#### NameToUIDResponse <a id="apex-legends-returntypes-nametouidresponse">
```typescript
export interface NameToUIDResponse {
    name: string,
    uid: string,
    pid: string,
    avatar: string
}
```