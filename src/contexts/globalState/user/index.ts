import { atom } from "recoil";
import { User } from "src/domain/user/model";

import { GLOBAL_STATE_KEYS } from "../constant";

export const stateUser = atom<User | undefined>({
  key: GLOBAL_STATE_KEYS.USER,
  default: undefined,
});
