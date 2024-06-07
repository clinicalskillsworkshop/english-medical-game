import { useEffect, useState } from 'react';
import './Stage.css';
import Interactive from './Stage/Interactive';
import Options from './Stage/Options';

function Stage( { action, reset } ) {
  const [option, setOption] = useState(null);
  const [introCompleted, setIntroCompleted] = useState(false);
  const IntroComponent = action.intro ?? null;
  let showIntro = action.intro && !introCompleted;

  useEffect(() => {
    if (option && 'action' in option.result) {
      setOption(null);
      reset(option.result.action);
    }
  }, [option, reset]);

  useEffect(() => {
    if (!showIntro && action.options.length === 1) {
      setOption(action.options[0]);
    }
  }, [action.options, showIntro]);

  return (
    <div className='stage'>
      <div className='backdrop'></div>
      <h2>{action.label}</h2>

      {option && <Interactive 
        patient={option.result.patient} 
        translation={option.result.translation}
        x={350}
        y={200}
      />}

      {!option && !showIntro && action.helpers && action.helpers.map((helper, key) => {
        const HelperComponent = helper.component;
        return <HelperComponent key={key} x={helper.x} y={helper.y}/>;
      })}

      {showIntro ? 
        <IntroComponent setIntroCompleted={setIntroCompleted} /> : 
        <Options action={action} option={option} setOption={setOption} reset={reset} />
      }
    </div>
  );
}

export default Stage;