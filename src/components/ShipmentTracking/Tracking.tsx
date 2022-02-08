import './Tracking.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faShuttleVan} from '@fortawesome/free-solid-svg-icons';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {Props} from '../../pages/ShipmentTracking/ShipmentTracking';
import classNames from 'classnames';

const shipmentState = {
  created: 'TICKET_CREATED',
  package_recevied: 'PACKAGE_RECEIVED',
  in_transit: 'IN_TRANSIT',
  not_yet_shipped: 'NOT_YET_SHIPPED',
  out_for_delivery: 'OUT_FOR_DELIVERY',
  waiting_for_customer_actions: 'WAITING_FOR_CUSTOMER_ACTION',
  delivered: 'DELIVERED',
  canceld: 'CANCELED',
  not_delivered: 'NOT_DELIVERED',
};

const shipmentStateTranslated: any = {
  DELIVERED: 'تم تسليم الشحنة',
  NOT_DELIVERED: 'لم يتم تسليم الشحنة',
  CANCELED: 'تم إلغاء الشحنة',
};

const daysNames: any = {
  Saturday: 'السبت',
  Sunday: 'الأحد',
  Monday: 'الاثنين',
  Tuesday: 'الثلاثاء ',
  Wednsday: 'الأربعاء',
  Thursday: 'الخميس ',
  Friday: 'الجمعة ',
};

const monthsNames = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل ',
  'مايو',
  'يونيو ',
  'يوليو ',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

const checkMark = <FontAwesomeIcon icon={faCheck} color="white" size="xs" />;
const shuttleVan = (
  <FontAwesomeIcon icon={faShuttleVan} color="white" size="lg" />
);
const save = <FontAwesomeIcon icon={faSave} color="white" size="lg" />;

const Tracking: React.FC<Props> = ({shipmentData}) => {
  const {
    CurrentStatus: {state},
  } = shipmentData;

  const deliveryClasses = classNames({
    green: state === shipmentState.delivered,
    red: state === shipmentState.canceld,
    yellow: state === shipmentState.not_delivered,
    '#979797': state === shipmentState.out_for_delivery,
  });

  const getCorrectPromisedDate = () => {
    const year = new Date(shipmentData.PromisedDate as string).getFullYear();
    const month =
      monthsNames[new Date(shipmentData.PromisedDate as string).getMonth() - 1];
    const day = new Date(shipmentData.PromisedDate as string).getDate();
    return {
      year,
      promisedDate: `${year} ${month} ${day}`,
    };
  };

  const getCorrectDeliveryDate = () => {
    const year = new Date(shipmentData.CurrentStatus.timestamp).getFullYear();
    const month =
      monthsNames[
        new Date(shipmentData.CurrentStatus.timestamp).getMonth() - 1
      ];
    const day = new Date(shipmentData.CurrentStatus.timestamp).getDate();
    return `${year} ${month} ${day}`;
  };

  const getLatestUpdateDate = (): any => {
    const dayName = new Date(
      shipmentData.CurrentStatus.timestamp,
    ).toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const time = new Date(
      shipmentData.CurrentStatus.timestamp,
    ).toLocaleDateString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return `at ${time} ${daysNames[dayName]}`;
  };

  return (
    <div className="tracking">
      <div className="top-container">
        <ul>
          <li>
            <div className="sub-text">موعد التسليم خلال</div>
            <div className="text">
              {getCorrectPromisedDate().year
                ? getCorrectPromisedDate().promisedDate
                : getCorrectDeliveryDate()}
            </div>
          </li>
          <li>
            <div className="sub-text">اسم التاجر</div>
            <div className="text">SOUQ.COM</div>
          </li>
          <li>
            <div className="sub-text">اخر تحديث</div>
            <div className="text">{getLatestUpdateDate()}</div>
          </li>
          <li>
            <div className="sub-text">
              رقم الشحنة {shipmentData.TrackingNumber}
            </div>
            <div className="text" style={{color: deliveryClasses}}>
              {shipmentStateTranslated[shipmentData.CurrentStatus.state]}
            </div>
          </li>
        </ul>
      </div>
      <div className="split-line"></div>
      <div className="bottom-container">
        <div className="shipment-delivery">
          <div className="tracking-line">
            {state === shipmentState.out_for_delivery && (
              <div
                className="line-image save-image"
                style={{backgroundColor: 'red', height: '50px', width: '50px'}}
              >
                {save}
              </div>
            )}
            {state === shipmentState.delivered && (
              <div
                className="line-image fourth-mark"
                style={{backgroundColor: 'green'}}
              >
                {checkMark}
              </div>
            )}
            <div
              className="line"
              style={{backgroundColor: deliveryClasses}}
            ></div>
          </div>
          <div className="shipment-text " style={{alignSelf: 'flex-start'}}>
            تم التسليم
          </div>
        </div>
        <div className="shipment-enroute">
          <div className="tracking-line">
            <div
              className="line"
              style={{backgroundColor: deliveryClasses}}
            ></div>
            {state === shipmentState.out_for_delivery && (
              <div
                className="line-image van-image"
                style={{backgroundColor: 'red', height: '50px', width: '50px'}}
              >
                {shuttleVan}
              </div>
            )}
            {state === shipmentState.delivered && (
              <div
                className="line-image third-mark"
                style={{backgroundColor: 'green'}}
              >
                {checkMark}
              </div>
            )}
          </div>
          <div className="shipment-text" style={{alignSelf: 'flex-start'}}>
            الشحنة خرجت للتسليم
          </div>
        </div>
        <div className="shipment-merchant-arrival">
          <div className="tracking-line">
            <div
              className="line"
              style={{backgroundColor: deliveryClasses}}
            ></div>
            <div
              className="line-image second-mark"
              style={{backgroundColor: deliveryClasses}}
            >
              {checkMark}
            </div>
          </div>
          <div className="shipment-text">تم استلام الشحنة من التاجر</div>
        </div>
        <div className="shipment-creation">
          <div className="tracking-line">
            <div
              className="line"
              style={{backgroundColor: deliveryClasses}}
            ></div>
            <div
              className="line-image first-mark"
              style={{backgroundColor: deliveryClasses}}
            >
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
