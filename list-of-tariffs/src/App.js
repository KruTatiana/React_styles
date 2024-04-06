import themeBlue from './component/theme-blue.module.css'
import themeGreen from './component/theme-green.module.css'
import themeBlack from './component/theme-black.module.css'
import themeRed from './component/theme-red.module.css'
import TariffCard from './component/TariffCard/TariffCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cards_container">
        <TariffCard
          price = {300}
          speed = "10"
          theme = {themeBlue}
        />
        <TariffCard
          price = {450}
          speed = "50"
          theme = {themeGreen}
        />
        <TariffCard
          price = {550}
          speed = "100"
          theme = {themeRed}
        />
        <TariffCard
          price = {1000}
          speed = "200"
          theme = {themeBlack}
        />
      </div>
    </div>
  );
}

export default App;
