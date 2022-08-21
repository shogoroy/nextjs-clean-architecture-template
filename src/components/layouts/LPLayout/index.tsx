import LPFooter from "src/components/organisms/LPFooter";
import LPHeader from "src/components/organisms/LPHeader";
import { User } from "src/domain/user/model";

interface Props {
  user?: User;
  children: React.ReactNode;
}

const LPLayout: React.FC<Props> = ({ user, children }) => {
  if (user) {
    // TODO - userの有無で、レイアウトを変えたりリダイレクトしたりする
  }

  return (
    <>
      <LPHeader />
      <main className="h-[90vh]">{children}</main>
      <LPFooter />
    </>
  );
};

export default LPLayout;
