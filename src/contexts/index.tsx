import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

const GlobalContextsProvider: React.FC<Props> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default GlobalContextsProvider;
