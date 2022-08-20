import { xxxCsrApiClient } from "src/data/adapters/xxx/csrApiClient";
import { DataResponse } from "src/data/model";
import { convertXxxApiError2ErrorModel } from "src/domain/error/converter";
import { convertXxxV1User2User } from "src/domain/user/converter";
import { User } from "src/domain/user/model";

type Params = {
  /* FIXME */
};

/**
 * TODO: OpenApi などの外部スキーマを使えるとベター。
 */
export type XxxV1User = {
  id: number;
  name: string;
};

export const fetchUser = async (
  _: Params,
  apiClient = xxxCsrApiClient
): Promise<DataResponse<User>> => {
  const URL = "/api/v1/users";

  return await apiClient
    .get<XxxV1User>(URL)
    .then((res) => {
      return { data: convertXxxV1User2User(res.data) };
    })
    .catch((e) => {
      return { error: convertXxxApiError2ErrorModel(e) };
    });
};
