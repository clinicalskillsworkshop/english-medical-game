import { useState } from 'react';
import Button from '../Common/Button';
import './Interactive.css';

function Interactive( { patient, translation, x, y, style } ) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className='interactive' style={{ top: x, left: y, ...style }}>
      <div className='patient'>
        {patient}
      </div>
      {!showTranslation && <Button 
        label='Clique para ver tradução'
        type='option'
        block 
        style={{ marginTop: '15px' }}
        onClick={() => setShowTranslation(true)}
      />}
      {showTranslation && <div 
        className='translation' 
        style={{ marginTop: '15px' }}>
        {translation}
      </div>}
    </div>
  );
}

export default Interactive;
