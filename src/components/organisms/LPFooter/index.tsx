import Image from "src/components/atoms/Image";

interface Props {}

const LPFooter: React.FC = () => {
  return (
    <>
      <footer className={"bg-black"}>
        &copy; <Image src="/logo.svg" alt="Logo" width={72} height={16} />
      </footer>
    </>
  );
};

export default LPFooter;
