interface ServerStatus {
    Status: string,
    HTTPCode: number,
    ResponseTime: number,
    QueryTimestamp: number
}
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