import { useEffect, useReducer } from 'react';
import './App.css';
import Calc from './components/Calc';
import { ACTIONS, defaultState, reducer, State } from './state/state';

function App() {
  const [myState, dispatch] = useReducer(reducer, defaultState)

console.log('consoling: myState.calc :::', myState.calc )
console.log(Array.isArray(myState.calc))
  const handleAddCalc = () => {
    dispatch({ type: ACTIONS.ADDCALC })
  };

  console.log('consoling: myState :::', myState )


  useEffect(() => {
    console.log('consoling: state in reducer :::', myState)
  }, [myState])

  console.log('consoling: myState in App :::', myState)

  return (
    <State.Provider value={{ myState, dispatch }}>

      <div className="App">
        <h1>My Calculator Project</h1>

        <div className='pageContent'>
          <button className='addCalc' onClick={handleAddCalc}>+</button>
          {myState.calc.map(item=> <Calc state={myState} dispatch={dispatch} key = {item.id} />)}
          {/* <Calc state={myState} dispatch={dispatch} /> */}
        </div>
      </div>
    </State.Provider>
  );
}

export default App;
