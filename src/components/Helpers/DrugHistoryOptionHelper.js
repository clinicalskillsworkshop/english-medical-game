import './DrugHistoryOptionHelper.css';

function DrugHistoryOptionHelper( { x, y } ) {
  return (
    <div className='drugHistoryOptionHelper' style={{ top: x, left: y }}>
      <div className='heading'>ATENÇÃO!</div>
      <div className='body'>Observe que termo “drug” empregado nessa pergunta é diferente da pergunta “Do you do any other drugs?”, que se refere à drogas ilícitas, abordado na Social History.</div>
    </div>
  );
}

export default DrugHistoryOptionHelper;
