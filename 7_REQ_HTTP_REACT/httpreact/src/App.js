import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);

  const { data: productsData, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
    };

    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newProduct),
    // });

    // const addedProduct = await response.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(newProduct, 'POST');

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {productsData && productsData.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="price">
            Preço:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
