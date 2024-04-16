import TariffCard from './component/useTariffCard/useTariffCard';
import './App.css';

function App() {
  const tariffs = [
    {price : 300, 
    speed: 10,
    theme: "color_blue",
    id: "blue_card"
    },
    {price : 450, 
    speed: 50,
    theme: 'color_green',
    id: "green_card"
    },
    {price : 500, 
    speed: 100,
    theme: 'color_red',
    id: "red_card"
    },
    {price : 1000, 
    speed: 200,
    theme: 'color_black',
    id: "black_card"
    }
  ]

  return (
    <div className="App">
      <ul className="cards_container">
        {
        tariffs.map((item, key) => 
      <TariffCard 
      price = {item.price}
      speed = {item.speed}
      theme = {item.theme}
      id = {item.id}
      key = {key}
      />)
        }

        {/* <TariffCard
          price = {300}
          speed = "10"
          theme = {colors.color_blue}
          id = "blue_card"
        />
        <TariffCard
          price = {450}
          speed = "50"
          theme = {colors.color_green}
          id = "green_card"
        />
        <TariffCard
          price = {550}
          speed = "100"
          theme = {colors.color_red}
          id = "red_card"
        />
        <TariffCard
          price = {1000}
          speed = "200"
          theme = {colors.color_black}
          id = "black_card" */}          
      </ul>
    </div>
  );
}

export default App;
