import {Props} from '../../pages/ShipmentTracking/ShipmentTracking';
import './Details.scss';

const states: any = {
  TICKET_CREATED: 'TICKET_CREATED',
  PACKAGE_RECEIVED: 'PACKAGE_RECEIVED',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
};

const translatedStates: any = {
  TICKET_CREATED: 'تم إنشاء الشحنة',
  PACKAGE_RECEIVED: 'تم إستلام الشحنة من التاجر',
  OUT_FOR_DELIVERY: 'الشحنة خرجت للتسليم',
  DELIVERED: 'تم تسليم الشحنة',
};

const Details: React.FC<Props> = ({shipmentData}) => {
  const {TransitEvents} = shipmentData;

  const statesFromEvents = TransitEvents.map((o) => o.state);
  const filteredStates = TransitEvents.filter(
    ({state}, index) => !statesFromEvents.includes(state, index + 1),
  );

  const reducedFilteredStates = filteredStates.filter(
    (state) => state.state === states[state.state],
  );

  return (
    <div className="details">
      <div className="details-text">تفاصيل الشحنة</div>
      <table className="content-table" dir="rtl" lang="ar">
        <thead>
          <tr>
            <th>الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {reducedFilteredStates.map((state, i) => {
            return (
              <tr key={i}>
                <td>مدينة نصر</td>
                <td>{`${new Date(state.timestamp).getDate()}/${
                  new Date(state.timestamp).getMonth() + 1
                }/${new Date(state.timestamp).getFullYear()}`}</td>
                <td>
                  {new Date(state.timestamp).toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </td>
                <td>{translatedStates[state.state]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
