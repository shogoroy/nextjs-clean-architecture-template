import NextImage from "next/image";

type Props = React.ComponentProps<typeof NextImage>;

const Image: React.FC<Props> = ({ unoptimized = true, ...props }) => {
  return <NextImage unoptimized={unoptimized} {...props} />;
};

export default Image;
