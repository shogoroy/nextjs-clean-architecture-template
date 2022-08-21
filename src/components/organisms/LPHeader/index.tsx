import { clsx } from "clsx";

interface Props {}

const LPHeader: React.FC<Props> = () => {
  return <header className={clsx("sticky", "h-8", "w-full")}></header>;
};

export default LPHeader;
