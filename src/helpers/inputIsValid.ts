import { INPUT_MAX_LENGTH } from "../shared/constants.ts";

export function inputIsValid(value: string | null): boolean {
  return Boolean(value !== null && value && value.length < INPUT_MAX_LENGTH);
}
