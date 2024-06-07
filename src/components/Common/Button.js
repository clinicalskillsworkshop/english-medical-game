import { useEffect, useRef } from 'react';
import './Button.css';

function Button( { label, x, y, type, bad, block, style, onClick } ) {
  const btnRef = useRef(null);

  useEffect(() => {
    if (bad) {
      const btn = btnRef.current;
      const handleBadReaction = () => {
        btn.classList.add('bad');
        setTimeout(() => btn.classList.remove('bad'), 200);
      }
      btn.addEventListener('click', handleBadReaction);
      return () => btn.removeEventListener('click', handleBadReaction);
    }
  }, [bad]);

  return (
    <button className={type + (block ? ' block' : '')} ref={btnRef} style={{ top: x, left: y, ...style }} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
