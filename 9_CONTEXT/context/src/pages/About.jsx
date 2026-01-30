import { useTitleColorContext } from "../hooks/useTitleColorContext";
import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter } = useCounterContext();

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default About;