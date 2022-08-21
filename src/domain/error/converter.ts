import { ERROR_CODES, ERROR_TYPES } from "./constant";
import { ErrorModel } from "./model";

export const convertXxxApiError2ErrorModel = (
  e: Record<string, any>
): ErrorModel<any> => {
  return {
    type: ERROR_TYPES.XXX_API,
    code: e.code || ERROR_CODES.UNKNWON,
    message: e.message || "",
    detail: e.detail || {},
  };
};
