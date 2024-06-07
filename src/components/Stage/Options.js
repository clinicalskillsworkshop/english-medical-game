import Button from '../Common/Button';
import './Options.css';

function Options( { action, option, setOption, reset } ) {
  return (
    <>
      <div className='options'>
        {!option && 
        <>
          <p className='hint'>{action.hint}</p>
          {action.options.map((option, key) => 
            option.label && <Button 
              key={key}
              label={option.label} 
              style={{ marginTop: '10px', ...option.style??{} }} 
              bad={option.result === false} 
              type='option' 
              onClick={() => option.result && 
                setOption(action.options[key])}
              block />
          )}
        </>
        }

        {option && option.result.feedback && 
          <>
            {option.result.feedback.heading && <div className='feedback'>
              <div className='heading'>{option.result.feedback.heading}</div>
              <p>{option.result.feedback.string}</p>
            </div>}
            {option.result.feedback.helpers && 
              option.result.feedback.helpers.map((helper, key) => {
              const HelperComponent = helper.component;
              return <HelperComponent key={key} x={helper.x} y={helper.y} />;
            })}
          </>
        }
      </div>

      <Button 
        label={option ? 'Back' : 'Main Menu'}
        style={{ width: '190px' }}  
        type='primary' 
        x={650} y={810} 
        onClick={option ? 
          (action.options.length === 1 ? 
            reset : () => setOption(null)) : reset} />
    </>
  );
}

export default Options;
