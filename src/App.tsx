import './App.scss';
import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import ShipmentTracking from './pages/ShipmentTracking/ShipmentTracking';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Prices from './pages/Prices/Prices';
import Sales from './pages/Sales/Sales';
import {ShipmentResponse} from './types';

const App: React.FC = () => {
  const [shipment, setShipment] = useState<ShipmentResponse>({
    CurrentStatus: {
      state: '',
      timestamp: '',
    },
    PromisedDate: '',
    TrackingNumber: '',
    TrackingURL: '',
    SupportPhoneNumbers: [''],
    TransitEvents: [
      {
        state: '',
        timestamp: '',
      },
    ],
    CreateDate: '',
  });

  const getApiData = async (): Promise<ShipmentResponse> => {
    const res: Response = await fetch(
      'https://tracking.bosta.co/shipments/track/7234258',
    );
    const data: ShipmentResponse = await res.json();

    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await getApiData();
      setShipment(dataFromServer);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ShipmentTracking shipmentData={shipment} />}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sales" element={<Prices />}></Route>
        <Route path="/prices" element={<Sales />}></Route>
      </Routes>
    </div>
  );
};

export default App;
