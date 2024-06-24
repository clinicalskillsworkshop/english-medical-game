import { useState } from 'react';
import Button from '../Common/Button';
import './PhysicalExaminationIntro.css';

function PhysicalExaminationIntro(image, originals, translations, { setIntroCompleted }) {
  const [translation, setTranslation] = useState(false);
  return (
    <>
      <div className='physicalExaminationIntro'>
        <img src={image} alt='Physical Exam' />
        <div className='hint'>
          <div className='heading'>Abdominal Examination:</div>
          <ul className='body'>
            {translation ? 
              originals.map(s => <li>{s}</li>) : 
              translations.map(s => <li>{s}</li>)}
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

const PhysicalExaminationIntroBuilder = (image, originals, translations) => 
    PhysicalExaminationIntro.bind(this, image, originals, translations);
export default PhysicalExaminationIntroBuilder;