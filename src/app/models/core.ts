export enum ConnectionStatus {
  Online,
  Offline
}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: any;
}

export interface Agent {
  agent: string;
  idagent: string;
  adressepostale: string;
  collectivite: string;
  contact: string;
  email: string;
  idutilisateur: string;
  equipe: string;
  matricule: string;
  logo: string;
  photo: string;
  reference: string;
  pseudo: string;
  secret: string;
  status: string;
  telephone: string;
  nbragent?: string;
  nbrverrou?: string;
  nbrsecteur?: string;
  connexion?: string;
  idcollectivite?: string;
}

export interface Collect {
  agent: string;
  contact: string;
  contribuable: string;
  date: string;
  equipement: string;
  idagent: string;
  idcontribuable: string;
  idcptcontribuable: string;
  idequipement: string;
  idexploitation: string;
  idmodepaie: string;
  idperiodicite: string;
  journal: Journal[];
  idsecteur: string;
  idtaxe: string;
  libelletaxe: string;
  matcontribuable: string;
  montant: string;
  numrecu: string;
  quantite: string;
  secteur: string;
  status: string;
  taxe: string;
  verrou: string;
  payed?: boolean;
  partial?: boolean;
  rest?: number;
  locked?: boolean;
  payedAmount?: number;
}

export interface Taxe {
  id: number;
  montant: string;
  collecte: string;
  taxe: string;
  idequipement: string;
  idtpe: string;
  syncronized?: boolean;
}

export interface Journal {
  idjournal: string;
  dateheure: string;
  action: string;
  actionId?: number;
}

export interface Log {
  id?: number;
  action: string;
  date?: string;
  type?: "collect" | "update" | "default";
  data?: any;
}

export interface Taxpayer {
  id?: number;
  nom: string;
  prenom: string;
  contact: string;
  description: string;
}
