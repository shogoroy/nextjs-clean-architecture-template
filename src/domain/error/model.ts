import { ERROR_CODES, ERROR_TYPES } from "./constant";
import { ValueOf } from "type-fest";

export type ErrorType = ValueOf<typeof ERROR_TYPES>;
export type ErrorCode = ValueOf<typeof ERROR_CODES>;

export type ErrorModel<T = Record<string, any>> = {
  type: ErrorType;
  code: ErrorCode;
  message: string;
  detail: T;
};
