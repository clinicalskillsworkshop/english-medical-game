import { useState } from 'react';
import Button from '../Common/Button';
import './SocialHistoryIntro.css';

function SocialHistoryIntro(questions, { setIntroCompleted }) {
  const [exploreClicked, setExploreClicked] = useState(false);

  return (
    <>
      <div className='socialHistoryIntro'>
        {!exploreClicked ? <Button 
          label='Explore Social History'
          type='secondary'
          style={{ width: '400px'}}
          x={250} y={600} 
          onClick={() => setExploreClicked(true)}/>
          :
          <div className='hint'>
            <div className='heading'>Questions:</div>
            <ul className='questions'>
              {questions.map((v, k) => <li key={k}>{v}</li>)}
            </ul>
          </div>
        }
      </div>
      {exploreClicked && <Button
        label='Answer'
        type='primary'
        style={{ width: '190px' }} 
        x={650} y={810} 
        onClick={() => setIntroCompleted(true)}/>}
    </>

  );
}

const SocialHistoryIntroBuilder = (questions) => SocialHistoryIntro.bind(this, questions);
export default SocialHistoryIntroBuilder;