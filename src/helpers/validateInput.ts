import { INPUT_MAX_LENGTH } from "../shared/constants.ts";
import type { Record_Types } from "../types";

export function loginIsValid(login: string): boolean {
  return Boolean(login && login.length < INPUT_MAX_LENGTH);
}

export function passwordIsValid(
  password: string | null,
  record_type?: Record_Types,
): boolean {
  if (record_type === "LDAP") return true;

  return Boolean(password && password.length < INPUT_MAX_LENGTH);
}
