import './File.css';

function File( { heading, children, x, y, width, height } ) {
  return (
    <div className="file" style={{ top: x, left: y, width: `${width}px`, height: `${height}px` }}>
      <div className="heading">
        {heading}
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  );
}

export default File;
