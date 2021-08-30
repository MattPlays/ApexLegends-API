import {Player} from "./Player";
import {MapRotation} from "./MapRotation";
import {News} from "./News";
import {ServerStatusResponse} from "./ServerStatusResponse";
import {NameToUIDResponse} from "./NameToUIDResponse";
export class ApexLegendsAPI {
    constructor(authKey: string);
    GetPlayerStatsByName(platform: string, players: string[]): Promise<Player[]>;
    GetPlayerStatsByUID(platform: string, uids: string[]): Promise<Player[]>;
    GetMapRotation(): Promise<MapRotation>;
    GetNews(): Promise<News[]>;
    GetServerStatus(): Promise<ServerStatusResponse>;
    NameToUID(name: string, platform: string): Promise<NameToUIDResponse>;
}