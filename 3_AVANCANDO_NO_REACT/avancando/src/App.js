import { useState } from 'react';
import './App.css';
import Lago from './assets/img.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Raul"
  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", km: 0, newCar: true },
    { id: 2, brand: "Porshe", color: "Branco", km: 120000, newCar: false },
    { id: 3, brand: "McLaren", color: "Preto", km: 0, newCar: true },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img.jpg" alt="Mata" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Lago} alt="Lago" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="Fiat" color="Vermelho" km={124000} newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="BWD" color="Branco" km={0} newCar={true} />
      <CarDetails brand="Nissan" color="Preto" km={240000} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
    </div>

  );
}

export default App;
