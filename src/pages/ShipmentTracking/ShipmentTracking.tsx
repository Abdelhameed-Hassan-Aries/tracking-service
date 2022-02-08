import './ShipmentTracking.scss';
import Tracking from '../../components/ShipmentTracking/Tracking';
import Details from '../../components/ShipmentDetails/Details';
import Address from '../../components/ShipmentAddress/Address';
import {ShipmentResponse} from '../../types';

export interface Props {
  shipmentData: ShipmentResponse;
}

const ShipmentTracking: React.FC<Props> = ({shipmentData}) => {
  return (
    <div className="tracking-page-container">
      <div className="tracking-comp">
        <Tracking shipmentData={shipmentData} />
      </div>
      <div className="details-addres-comp">
        <Address shipmentData={shipmentData} />
        <Details shipmentData={shipmentData} />
      </div>
    </div>
  );
};

export default ShipmentTracking;
