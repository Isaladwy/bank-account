function Buttons({ dispatch, isActive }) {
  return (
    <>
      <p>
        <button
          onClick={() => dispatch({ type: 'openAccount' })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'deposit', payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'withDraw', payload: 50 })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'requestLoan', payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'payLoan' })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'closeAccount' })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
      {}
    </>
  );
}

export default Buttons;
