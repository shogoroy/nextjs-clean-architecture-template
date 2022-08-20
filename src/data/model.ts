import { ErrorModel } from "src/domain/error/model";

export type DataResponse<T = undefined, U = Record<string, any>> =
  | {
      data: T;
      error?: ErrorModel<U>;
    }
  | { data?: T; error: ErrorModel<U> };
