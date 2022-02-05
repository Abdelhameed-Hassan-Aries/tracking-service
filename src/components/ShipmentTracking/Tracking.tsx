import './Tracking.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faShuttleVan} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-solid-svg-icons';

const checkMark = <FontAwesomeIcon icon={faCheck} color="white" size="xs" />;
const shuttleVan = (
  <FontAwesomeIcon icon={faShuttleVan} color="white" size="lg" />
);
const save = <FontAwesomeIcon icon={faSave} color="white" size="lg" />;

const Tracking = () => {
  return (
    <div className="tracking">
      <div className="top-container">
        <ul>
          <li>
            <div className="sub-text">موعد التسليم خلال</div>
            <div className="text">shipment canceled</div>
          </li>
          <li>
            <div className="sub-text">اسم التاجر</div>
            <div className="text">shipment canceled</div>
          </li>
          <li>
            <div className="sub-text">اخر تحديث</div>
            <div className="text">shipment canceled</div>
          </li>
          <li>
            <div className="sub-text">رقم الشحنة</div>
            <div className="text">shipment canceled</div>
          </li>
        </ul>
      </div>
      <div className="split-line"></div>
      <div className="bottom-container">
        <div className="shipment-delivery">
          <div className="tracking-line">
            <div
              className="line-image"
              style={{backgroundColor: 'red', height: '50px', width: '50px'}}
            >
              {save}
            </div>
            <div className="line" style={{backgroundColor: 'red'}}></div>
          </div>
          <div className="shipment-text " style={{alignSelf: 'flex-start'}}>
            تم التسليم
          </div>
        </div>
        <div className="shipment-enroute">
          <div className="tracking-line">
            <div
              className="line"
              style={{backgroundColor: 'red', width: '50%'}}
            ></div>
            <div
              className="line-image"
              style={{backgroundColor: 'red', height: '50px', width: '50px'}}
            >
              {shuttleVan}
            </div>
            <div
              className="mini-line"
              style={{width: '150px', backgroundColor: 'red'}}
            ></div>
          </div>
          <div className="shipment-text" style={{marginRight: '85px'}}>
            الشحنة خرجت للتسليم
          </div>
        </div>
        <div className="shipment-merchant-arrival">
          <div className="tracking-line">
            <div className="line" style={{backgroundColor: 'red'}}></div>
            <div className="line-image" style={{backgroundColor: 'red'}}>
              {checkMark}
            </div>
            <div
              className="mini-line"
              style={{width: '100px', backgroundColor: 'red'}}
            ></div>
          </div>
          <div className="shipment-text">تم استلام الشحنة من التاجر</div>
        </div>
        <div className="shipment-creation">
          <div className="tracking-line">
            <div className="line" style={{backgroundColor: 'red'}}></div>
            <div className="line-image" style={{backgroundColor: 'red'}}>
              {checkMark}
            </div>
          </div>
          <div className="shipment-text">تم انشاء الشحنة</div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
