import { useGlobalValue } from "src/contexts/globalState/hooks";
import { stateUser } from "src/contexts/globalState/user";

export const useUser = () => {
  const user = useGlobalValue(stateUser);

  return user;
};
