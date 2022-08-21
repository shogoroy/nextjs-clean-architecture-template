import NextImage from "next/image";

type Props = React.ComponentProps<typeof NextImage>;

const Image: React.FC<Props> = ({ unoptimized = true, ...props }) => {
  return <NextImage {...props} />;
};

export default Image;
