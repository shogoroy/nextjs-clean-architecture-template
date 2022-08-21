import { useCallback, useEffect, useState } from "react";
import { useSetGlobalState } from "src/contexts/globalState/hooks";
import { stateUser } from "src/contexts/globalState/user";
import { SWR_KEYS } from "src/data/constant";
import { useSwr } from "src/data/hooks";
import { fetchUser } from "src/data/repository/user";

export const useFetchUser = () => {
  const [trigger, setTrigger] = useState(false);

  const { data } = useSwr(trigger && SWR_KEYS.FETCH_USER, fetchUser);

  const fetch = useCallback(() => {
    setTrigger(true);
  }, []);

  const setUser = useSetGlobalState(stateUser);

  useEffect(() => {
    if (data) {
      if (data.data) {
        setUser(data.data);
      }

      if (data.error) {
        // TODO エラーハンドリング
      }
    }
  }, [data, setUser]);

  return {
    fetch,
  };
};
