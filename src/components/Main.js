import Buttons from './Buttons';
import Header from './Header';

function Main({ dispatch, isActive, balance, loan }) {
  return (
    <div className="App">
      <Header balance={balance} loan={loan} />

      <Buttons dispatch={dispatch} isActive={isActive} />
    </div>
  );
}

export default Main;
