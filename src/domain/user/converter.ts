import { XxxV1User } from "src/data/repository/user";
import { User } from "./model";

export const convertXxxV1User2User = (xxxV1User: XxxV1User): User => {
  return {
    id: xxxV1User.id,
    name: xxxV1User.name,
  };
};
