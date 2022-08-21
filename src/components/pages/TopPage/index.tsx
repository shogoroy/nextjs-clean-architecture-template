import LPLayout from "src/components/layouts/LPLayout";
import TopPageTemplate from "src/components/templates/TopPageTemplate";

interface Props {
  //
}

const TopPage: React.FC<Props> = () => {
  return (
    <LPLayout>
      <TopPageTemplate />
    </LPLayout>
  );
};

export default TopPage;
