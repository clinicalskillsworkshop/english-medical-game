import Button from '../Common/Button';
import './HistoryChiefComplaintIntro.css';

function HistoryChiefComplaintIntro({ setIntroCompleted }) {
  return (
    <>
      <div className='historyChiefComplaintIntro'>
        <div className='hint'>
          <b>ATTENTION</b>: Selecione as perguntas de acordo com a ordem do mnemônico!
        </div>
        <div className='body'>
          (<b>S</b>)ite<br/>
          (<b>O</b>)nset<br/>
          (<b>C</b>)haracter<br/>
          (<b>R</b>)adiation<br/>
          (<b>A</b>)ssociated symptoms<br/>
          (<b>T</b>)iming<br/>
          (<b>E</b>)xarcebating and relieving factors<br/>
          (<b>S</b>)everity<br/>
        </div>
      </div>
      <Button
        label='Next'
        type='primary'
        style={{ width: '190px' }} 
        x={650} y={810} 
        onClick={() => setIntroCompleted(true)}/>
    </>

  );
}

export default HistoryChiefComplaintIntro;
