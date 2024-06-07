import './HistoryChiefComplaintHelper.css';

function HistoryChiefComplaintHelper( { x, y } ) {
  return (
    <div className='historyChiefComplainHelper' style={{ top: x, left: y }}>
      (S)ite<br/>
      (O)nset<br/>
      (C)haracter<br/>
      (R)adiation<br/>
      (A)ssociated symptoms<br/>
      (T)iming<br/>
      (E)xarcebating and relieving factors<br/>
      (S)everity<br/>
    </div>
  );
}

export default HistoryChiefComplaintHelper;
