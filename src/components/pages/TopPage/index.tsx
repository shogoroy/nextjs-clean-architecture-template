import LPLayout from "src/components/layouts/LPLayout";
import TopPageTemplate from "src/components/templates/TopPageTemplate";

import { useViewModel } from "./useViewModel";

interface Props {
  //
}

const TopPage: React.FC<Props> = () => {
  const { user } = useViewModel();

  return (
    <LPLayout user={user}>
      <TopPageTemplate />
    </LPLayout>
  );
};

export default TopPage;
