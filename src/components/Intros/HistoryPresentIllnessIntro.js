import Button from '../Common/Button';
import './HistoryPresentIllnessIntro.css';

function HistoryPresentIllnessIntro({ setIntroCompleted }) {
  return (
    <>
      <div className='historyPresentIllnessIntro'>
        <div className='hint'>
          <b>ATTENTION</b>: Selecione as perguntas de acordo com a ordem do mnemônico!
        </div>
        <div className='body'>
          (<b>O</b>)nset<br/>
          (<b>D</b>)uration<br/>
          (<b>I</b>)ntensity<br/>
          (<b>P</b>)rogression<br/>
          (<b>A</b>)ggravating factors<br/>
          (<b>R</b>)elieving factors<br/>
          (<b>A</b>)ssociated symptoms<br/>
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

export default HistoryPresentIllnessIntro;
