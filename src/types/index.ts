export interface Mark {
  text: string;
}

export interface Type {
  name: Record_Types;
  code: string;
}

export type Record_Types = "Локальная" | "LDAP";

export interface Account {
  id: number;
  marks?: Mark[];
  record_type: Record_Types;
  login: string;
  password: string | null;
}
