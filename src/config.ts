import { environment } from "./environments/environment";

export const CONFIG = {
  API_URL: environment.apiUrl,
  UPDATE_URL: "https://www.codivoire.ci/simbo/update.xml",
  APP: {
    ID: "ci.codivoire.simbo",
    NAME: "Simbo",
    FULLNAME: "Simbo",
    DESCRIPTION: "Smart tax collection software.",
    VERSION: "1.0.13"
  },
  MESSAGES: {
    REQUEST_ERROR: "Erreur survenue, réessayer plus tard.",
    NETWORK_OFF: "Aucune connexion internet",
    NETWORK_ON: "De nouveau connecté à internet"
  },
  KEYS: {
    AUTH: "simbo_authentication",
    COLLECT: "simbo_collect",
    TAXPAYER: "simbo_taxpayer",
    TAXE: "simbo_taxe",
    SETTINGS: "simbo_settings",
    SESSION: "simbo_session",
    LOGS: "simbo_logs"
  },
  CURRENCY: "FCFA"
};
