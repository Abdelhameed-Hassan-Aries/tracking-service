import './Address.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPeopleCarry} from '@fortawesome/free-solid-svg-icons';
import {Props} from '../../pages/ShipmentTracking/ShipmentTracking';

const people = <FontAwesomeIcon icon={faPeopleCarry} color="red" size="lg" />;

const Address: React.FC<Props> = ({shipmentData}) => {
  return (
    <div className="address">
      <div className="address-text">عنوان التسليم</div>
      <div className="address-container">
        امبابة شارع طلعت حرب مدينة العمال بجوار <br></br>البرنس منزل 17 بلوك 33
      </div>
      <div className="problem-container">
        <div className="left-side">
          <div className="problem-text">!هل يوجد مشكلة فى شحنتك ؟</div>
          <button className="problem-button">إبلاغ عن مشكلة</button>
        </div>
        <div className="right-side">{people}</div>
      </div>
    </div>
  );
};

export default Address;
