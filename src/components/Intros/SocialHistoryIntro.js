import { useState } from 'react';
import Button from '../Common/Button';
import './SocialHistoryIntro.css';

function SocialHistoryIntro({ setIntroCompleted }) {
  const [exploreClicked, setExploreClicked] = useState(false);

  return (
    <>
      <div className='socialHistoryIntro'>
        {!exploreClicked ? <Button 
          label='Explore Social History'
          type='secondary'
          style={{ width: '400px'}}
          x={300} y={600} 
          onClick={() => setExploreClicked(true)}/>
          :
          <div className='hint'>
            <div className='heading'>Questions:</div>
            <ul className='questions'>
              <li>Do you live with anyone?</li>
              <li>Do you work currently?</li>
              <li>Are you up to date with vaccinations?</li>
              <li>Have you been vaccinated for tuberculosis (TB)?</li>
              <li>Do you smoke?</li>
              <li>Do you drink alcohol?</li>
              <li>Do you use recreational drugs?</li>
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

export default SocialHistoryIntro;
