class ServerStatus {
    /**
     * 
     * @param {string} Status 
     * @param {number} HTTPCode 
     * @param {number} ResponseTime 
     * @param {number} QueryTimestamp 
     */
    constructor(Status, HTTPCode, ResponseTime, QueryTimestamp) {
        this.Status = Status;
        this.HTTPCode = HTTPCode;
        this.ResponseTime = ResponseTime;
        this.QueryTimestamp = QueryTimestamp;
    }
}
class ServerStatusResponse {
    /**
     * @param {string} message
     * @param {object} data
     */
    constructor(message, data) {
        this.message = message;
        this.data = {
            Origin_login: {
                'EU-West': new ServerStatus(data.Origin_login['EU-West'].Status, data.Origin_login['EU-West'].HTTPCode, data.Origin_login['EU-West'].ResponseTime,data.Origin_login['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.Origin_login['EU-East'].Status, data.Origin_login['EU-East'].HTTPCode, data.Origin_login['EU-East'].ResponseTime, data.Origin_login['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.Origin_login['US-West'].Status, data.Origin_login['US-West'].HTTPCode, data.Origin_login['US-West'].ResponseTime, data.Origin_login['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.Origin_login['US-Central'].Status, data.Origin_login['US-Central'].HTTPCode, data.Origin_login['US-Central'].ResponseTime, data.Origin_login['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.Origin_login['US-East'].Status, data.Origin_login['US-East'].HTTPCode, data.Origin_login['US-East'].ResponseTime, data.Origin_login['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.Origin_login.SouthAmerica.Status, data.Origin_login.SouthAmerica.HTTPCode, data.Origin_login.SouthAmerica.ResponseTime, data.Origin_login.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.Origin_login.Asia.Status, data.Origin_login.Asia.HTTPCode, data.Origin_login.Asia.ResponseTime, data.Origin_login.Asia.QueryTimestamp) 
            },
            EA_novafusin: {
                'EU-West': new ServerStatus(data.EA_novafusin['EU-West'].Status, data.EA_novafusin['EU-West'].HTTPCode, data.EA_novafusin['EU-West'].ResponseTime,data.EA_novafusin['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.EA_novafusin['EU-East'].Status, data.EA_novafusin['EU-East'].HTTPCode, data.EA_novafusin['EU-East'].ResponseTime, data.EA_novafusin['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.EA_novafusin['US-West'].Status, data.EA_novafusin['US-West'].HTTPCode, data.EA_novafusin['US-West'].ResponseTime, data.EA_novafusin['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.EA_novafusin['US-Central'].Status, data.EA_novafusin['US-Central'].HTTPCode, data.EA_novafusin['US-Central'].ResponseTime, data.EA_novafusin['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.EA_novafusin['US-East'].Status, data.EA_novafusin['US-East'].HTTPCode, data.EA_novafusin['US-East'].ResponseTime, data.EA_novafusin['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.EA_novafusin.SouthAmerica.Status, data.EA_novafusin.SouthAmerica.HTTPCode, data.EA_novafusin.SouthAmerica.ResponseTime, data.EA_novafusin.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.EA_novafusin.Asia.Status, data.EA_novafusin.Asia.HTTPCode, data.EA_novafusin.Asia.ResponseTime, data.EA_novafusin.Asia.QueryTimestamp) 
            },
            EA_accounts: {
                'EU-West': new ServerStatus(data.EA_accounts['EU-West'].Status, data.EA_accounts['EU-West'].HTTPCode, data.EA_accounts['EU-West'].ResponseTime,data.EA_accounts['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.EA_accounts['EU-East'].Status, data.EA_accounts['EU-East'].HTTPCode, data.EA_accounts['EU-East'].ResponseTime, data.EA_accounts['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.EA_accounts['US-West'].Status, data.EA_accounts['US-West'].HTTPCode, data.EA_accounts['US-West'].ResponseTime, data.EA_accounts['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.EA_accounts['US-Central'].Status, data.EA_accounts['US-Central'].HTTPCode, data.EA_accounts['US-Central'].ResponseTime, data.EA_novafusin['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.EA_accounts['US-East'].Status, data.EA_accounts['US-East'].HTTPCode, data.EA_accounts['US-East'].ResponseTime, data.EA_accounts['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.EA_accounts.SouthAmerica.Status, data.EA_accounts.SouthAmerica.HTTPCode, data.EA_accounts.SouthAmerica.ResponseTime, data.EA_novafusin.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.EA_accounts.Asia.Status, data.EA_accounts.Asia.HTTPCode, data.EA_accounts.Asia.ResponseTime, data.EA_accounts.Asia.QueryTimestamp) 
            },
            ApexOauth_Crossplay: {
                'EU-West': new ServerStatus(data.ApexOauth_Crossplay['EU-West'].Status, data.ApexOauth_Crossplay['EU-West'].HTTPCode, data.ApexOauth_Crossplay['EU-West'].ResponseTime,data.ApexOauth_Crossplay['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.ApexOauth_Crossplay['EU-East'].Status, data.ApexOauth_Crossplay['EU-East'].HTTPCode, data.ApexOauth_Crossplay['EU-East'].ResponseTime, data.ApexOauth_Crossplay['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.ApexOauth_Crossplay['US-West'].Status, data.ApexOauth_Crossplay['US-West'].HTTPCode, data.ApexOauth_Crossplay['US-West'].ResponseTime, data.ApexOauth_Crossplay['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.ApexOauth_Crossplay['US-Central'].Status, data.ApexOauth_Crossplay['US-Central'].HTTPCode, data.ApexOauth_Crossplay['US-Central'].ResponseTime, data.ApexOauth_Crossplay['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.ApexOauth_Crossplay['US-East'].Status, data.ApexOauth_Crossplay['US-East'].HTTPCode, data.ApexOauth_Crossplay['US-East'].ResponseTime, data.ApexOauth_Crossplay['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.ApexOauth_Crossplay.SouthAmerica.Status, data.ApexOauth_Crossplay.SouthAmerica.HTTPCode, data.ApexOauth_Crossplay.SouthAmerica.ResponseTime, data.ApexOauth_Crossplay.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.ApexOauth_Crossplay.Asia.Status, data.ApexOauth_Crossplay.Asia.HTTPCode, data.ApexOauth_Crossplay.Asia.ResponseTime, data.ApexOauth_Crossplay.Asia.QueryTimestamp) 
            },
            selfCoreTest: {
                'Status-website': new ServerStatus(data.selfCoreTest['Status-website'].Status, data.selfCoreTest['Status-website'].HTTPCode, data.selfCoreTest['Status-website'].ResponseTime,data.selfCoreTest['Status-website'].QueryTimestamp),
                'Stats-API': new ServerStatus(data.selfCoreTest['Stats-API'].Status, data.selfCoreTest['Stats-API'].HTTPCode, data.selfCoreTest['Stats-API'].ResponseTime, data.selfCoreTest['Stats-API'].QueryTimestamp),
                'Overflow-#1': new ServerStatus(data.selfCoreTest['Overflow-#1'].Status, data.selfCoreTest['Overflow-#1'].HTTPCode, data.selfCoreTest['Overflow-#1'].ResponseTime, data.selfCoreTest['Overflow-#1'].QueryTimestamp),
                'Overflow-#2': new ServerStatus(data.selfCoreTest['Overflow-#2'].Status, data.selfCoreTest['Overflow-#2'].HTTPCode, data.selfCoreTest['Overflow-#2'].ResponseTime, data.selfCoreTest['Overflow-#2'].QueryTimestamp),
                'Origin-API': new ServerStatus(data.selfCoreTest['Origin-API'].Status, data.selfCoreTest['Origin-API'].HTTPCode, data.selfCoreTest['Origin-API'].ResponseTime, data.selfCoreTest['Origin-API'].QueryTimestamp),
                'Playstation-API': new ServerStatus(data.otherPlatforms['Playstation-API'].Status, data.otherPlatforms['Playstation-API'].HTTPCode, data.otherPlatforms['Playstation-API'].ResponseTime, data.otherPlatforms['Playstation-API'].QueryTimestamp),
                'Xbox-API': new ServerStatus(data.otherPlatforms['Xbox-API'].Status, data.otherPlatforms['Xbox-API'].HTTPCode, data.otherPlatforms['Xbox-API'].ResponseTime, data.otherPlatforms['Xbox-API'].QueryTimestamp),
            },
            otherPlatforms: {
                'Playstation-Network': new ServerStatus(data.otherPlatforms['Playstation-Network'].Status, data.otherPlatforms['Playstation-Network'].HTTPCode, data.otherPlatforms['Playstation-Network'].ResponseTime, data.otherPlatforms['Playstation-Network'].QueryTimestamp),
                'Xbox-Live': new ServerStatus(data.otherPlatforms['Xbox-Live'].Status, data.otherPlatforms['Xbox-Live'].HTTPCode, data.otherPlatforms['Xbox-Live'].ResponseTime, data.otherPlatforms['Xbox-Live'].QueryTimestamp),
            }
        }
    }
}
module.exports = ServerStatusResponse;