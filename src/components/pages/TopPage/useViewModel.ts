import { useEffect } from "react";
import { useFetchUser } from "src/domain/user/hooks/dispatcher";
import { useUser } from "src/domain/user/hooks/selector";

export const useViewModel = () => {
  const user = useUser();

  const { fetch: fetchUser } = useFetchUser();
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user };
};
