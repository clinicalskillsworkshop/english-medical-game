import './Case.css';

function Case( { label, x, y, onClick } ) {
  return (
    <div className="case" style={{ top: x, left: y }} onClick={onClick}>
      <h1>{label}</h1>
    </div>
  );
}

export default Case;
