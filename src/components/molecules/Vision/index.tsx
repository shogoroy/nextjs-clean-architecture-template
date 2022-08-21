import Typography from "src/components/atoms/Typography";

interface Props {
  className?: string;
}

const Vision: React.FC<Props> = ({ className }) => {
  return <Typography className={className}>Some Vision</Typography>;
};

export default Vision;
