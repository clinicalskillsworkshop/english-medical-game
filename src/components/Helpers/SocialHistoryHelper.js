import './SocialHistoryHelper.css';

function SocialHistoryHelper({ x, y }) {
  return (
    <div className='socialHistoryHelper' style={{ top: x, left: y }}>
      <div className='body'>
        <div className='heading'>Questions:</div>
        <ul className='questions'>
          <li>Do you live with anyone?</li>
          <li>Do you work currently?</li>
          <li>Are you up to date with vaccinations?</li>
          <li>Have you been vaccinated for tuberculosis (TB)?</li>
          <li>Do you smoke?</li>
          <li>Do you drink alcohol?</li>
          <li>Do you use recreational drugs?</li>
        </ul>
      </div>
    </div>
  );
}

export default SocialHistoryHelper;
