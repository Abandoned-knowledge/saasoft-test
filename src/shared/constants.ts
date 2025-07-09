import type { Account } from "../types";

export const INPUT_MAX_LENGTH = 100;
export const INPUT_MARKS_MAX_LENGTH = 50;

export const DEFAULT_ACCOUNTS: Account[] = [
  {
    id: 1,
    marks: [{ text: "XXX" }],
    record_type: "Локальная",
    login: "login",
    password: "123123123",
  },
  {
    id: 2,
    marks: [{ text: "XXX" }, { text: "DDDDDD" }],
    record_type: "Локальная",
    login: "login",
    password: "password",
  },
  {
    id: 3,
    marks: [{ text: "XXX" }],
    record_type: "Локальная",
    login: "login",
    password: "password",
  },
  {
    id: 4,
    marks: [{ text: "Значение" }],
    record_type: "LDAP",
    login: "login",
    password: "password",
  },
  {
    id: 5,
    marks: [{ text: "Значение" }],
    record_type: "LDAP",
    login: "login",
    password: "password",
  },
];
