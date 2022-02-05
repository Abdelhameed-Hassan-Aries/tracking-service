import './ShipmentTracking.scss';
import Tracking from '../../components/ShipmentTracking/Tracking';
import Details from '../../components/ShipmentDetails/Details';
import Address from '../../components/ShipmentAddress/Address';

const ShipmentTracking = () => {
  return (
    <div className="tracking-page-container">
      <div className="tracking-comp">
        <Tracking />
      </div>
      <div className="details-addres-comp">
        <Details />
        <Address />
      </div>
    </div>
  );
};

export default ShipmentTracking;
