import { useState } from 'react';
import Button from '../Common/Button';
import './PhysicalExaminationIntro.css';

function PhysicalExaminationIntro(image, heading, originals, translations, { setIntroCompleted }) {
  const [translation, setTranslation] = useState(false);
  return (
    <>
      <div className='physicalExaminationIntro'>
        <img src={image} alt='Physical Exam' />
        <div className='hint'>
          <div className='heading'>{heading}</div>
          <ul className='body'>
            {translation ? 
              translations.map(s => <li>{s}</li>) : 
              originals.map(s => <li>{s}</li>)}
          </ul>
        </div>
      </div>
      <Button
        label='Translate'
        type='primary'
        style={{ width: '150px', fontSize: '20px' }}
        x={650} y={650}
        onClick={() => setTranslation(!translation)} />
      <Button
        label='Main Menu'
        type='primary'
        style={{ width: '150px', fontSize: '20px' }} 
        x={650} y={830} 
        onClick={() => setIntroCompleted(true)}/>
    </>

  );
}

const PhysicalExaminationIntroBuilder = (image, heading, originals, translations) => 
    PhysicalExaminationIntro.bind(this, image, heading, originals, translations);
export default PhysicalExaminationIntroBuilder;