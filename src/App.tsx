import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import ShipmentTracking from './pages/ShipmentTracking/ShipmentTracking';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Prices from './pages/Prices/Prices';
import Sales from './pages/Sales/Sales';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShipmentTracking />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sales" element={<Prices />}></Route>
        <Route path="/prices" element={<Sales />}></Route>
      </Routes>
    </div>
  );
};

export default App;
