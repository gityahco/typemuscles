type cloudProps = {
  text: string;
  active: boolean;
  correct: boolean | null;
};

export default function Word(props: cloudProps) {
  const { text, active, correct } = props;
  if (correct === true) {
    return <span className="correct">{text} </span>;
  }
  if (correct === false) {
    return <span className="incorrect">{text} </span>;
  }
  if (active === true) {
    return <span className="active">{text} </span>;
  }
  return <span>{text} </span>;
}
