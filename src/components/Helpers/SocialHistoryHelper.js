import './SocialHistoryHelper.css';

function SocialHistoryHelper(questions, { x, y }) {
  return (
    <div className='socialHistoryHelper' style={{ top: x, left: y }}>
      <div className='body'>
        <div className='heading'>Questions:</div>
        <ul className='questions'>
          {questions.map((v, k) => <li key={k}>{v}</li>)}
        </ul>
      </div>
    </div>
  );
}

const SocialHistoryHelperBuilder = (questions) => SocialHistoryHelper.bind(this, questions);
export default SocialHistoryHelperBuilder;
