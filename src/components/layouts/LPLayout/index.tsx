interface Props {
  children: React.ReactNode;
}

const LPLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default LPLayout;
