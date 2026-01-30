import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Lista de produtos</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default Products;