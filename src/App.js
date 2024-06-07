import { useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Case from './components/Menu/Case';
import Button from './components/Common/Button';
import File from './components/Menu/File';
import CaseOneFlow from './flows/CaseOne';
import Stage from './components/Stage';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function App() {
  const [width, height] = useWindowSize();
  const appRef = useRef(null);
  const canvasRef = useRef(null);

  const [flow, setFlow] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const [action, setAction] = useState(null);

  let cw = 1024;
  let ch = 721;

  const h = Math.min(height, (ch/cw)*width);
  const w = Math.min(width, (cw/ch)*height);
  const scale = Math.min(w/cw, h/ch);

  return (
    <div className="app" ref={appRef} style={{ 
        width: `${w}px`, 
        height: `${h}px` 
      }}>
      <div className="canvas" ref={canvasRef} style={{ 
          width: `${cw}px`, 
          height: `${ch}px`, 
          transform: `scale(${scale})` 
        }}>
        <Menu>
          {!flow &&
          <>
            <Case label='Case 1' x={250} y={90} onClick={() => setFlow(CaseOneFlow)} />
            <Case label='Case 2' x={250} y={390} />
            <Case label='Case 3' x={250} y={690} />
          </>}

          {flow && !caseOpen && 
          <>
            <File heading="Medical File" width={650} x={100} y={170}>
              {flow.file.map((attribute, key) => attribute.spacer ? <br key={key}/> : <p key={key}>
                <b>{attribute.label}: </b> {attribute.string}
              </p>)}
            </File>
            <Button type='primary' label='Open Case' x={600} y={800} onClick={() => setCaseOpen(true)} />
          </>}

          {flow && caseOpen && !action && 
          <>
            <div style={{ 
              position: 'absolute',
              top: '100px',
              left: '260px',
              maxWidth: '500px', 
              textAlign: 'center' 
            }}>
              {flow.menu.map((options, key) => <Button 
                type='primary' 
                key={key}
                block 
                label={options.label} 
                onClick={() => setAction(flow.actions[options.action])}
                style={{
                  margin: '0 auto 15px',
                  minWidth: '300px'
                }}/>)}
            </div>
              
            <Button type='primary' label='Close Case' x={600} y={800} onClick={() => {
              setCaseOpen(false);
              setFlow(null);
            }} />
          </>}

          {flow && caseOpen && action && <Stage 
            action={action} 
            reset={(action) => setAction(action ? flow.actions[action] : null)} />}
        </Menu>
      </div>
    </div>
  );
}

export default App;
