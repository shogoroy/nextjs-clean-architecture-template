import type { NextPage } from "next";
import LPLayout from "src/components/layouts/LPLayout";
import TopPageTemplate from "src/components/templates/TopPageTemplate";

const Home: NextPage = () => {
  return (
    <LPLayout>
      <TopPageTemplate />
    </LPLayout>
  );
};

export default Home;
