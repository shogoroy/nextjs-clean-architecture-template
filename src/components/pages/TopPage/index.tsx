import { useViewModel } from "./useViewModel";
import LPLayout from "src/components/layouts/LPLayout";
import TopPageTemplate from "src/components/templates/TopPageTemplate";

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
