import LPFooter from "src/components/organisms/LPFooter";
import LPHeader from "src/components/organisms/LPHeader";

interface Props {
  children: React.ReactNode;
}

const LPLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LPHeader />
      <main>{children}</main>
      <LPFooter />
    </>
  );
};

export default LPLayout;
