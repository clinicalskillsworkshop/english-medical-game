import './HistoryPresentIllnessHelper.css';

function HistoryPresentIllnessHelper( { x, y } ) {
  return (
    <div className='historyPresentIllnessHelper' style={{ top: x, left: y }}>
      (O)nset<br/>
      (D)uration<br/>
      (I)ntensity<br/>
      (P)rogression<br/>
      (A)ggravating factors<br/>
      (R)elieving factors<br/>
      (A)ssociated symptoms <br/>
    </div>
  );
}

export default HistoryPresentIllnessHelper;
