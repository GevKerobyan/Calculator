import React, { useEffect, useReducer, useState } from 'react'
import NumButton from '../elements/NumButton'
import useNumContext from '../Hooks/useContext';
import { ACTIONS, defaultState, reducer } from '../state/state';
import { calcStyles } from './CalcStyling'

function Calc({ state, dispatch }) {
  const calcContainerStyles = calcStyles()
  const [myState, myDispatch] = useReducer(reducer, defaultState)
  const [text, setText] = useState('')


  const nums = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['+', '-', '/', '*', '=']];

  // useEffect(() => {
  //   console.log(text)
  // }, [text])

  console.log('consoling: myState.result :::', myState.calc.result)

  console.log('consoling: sate in calc :::', state)
  const handleNumClick = (e) => {
    console.log(text, 'text')
    setText((eval(text + e.target.innerText)).toString());
    if (e.target.innerText === '+') {
      dispatch({ type: ACTIONS.PLUS, value: {
        
      } })
      // console.log(e.target.innerText);
    } else if (e.target.innerText === '-') {
      dispatch({ type: ACTIONS.MINUS })
      // console.log(e.target.innerText);
    } else if (e.target.innerText === '/') {
      dispatch({ type: ACTIONS.DIVIDE })
      // console.log(e.target.innerText);
    } else if (e.target.innerText === '*') {
      dispatch({ type: ACTIONS.MULTIPLY })
      // console.log(e.target.innerText);
    }
  }


  return (
    <div className={calcContainerStyles.calcItemWrapper}>
      <div className={calcContainerStyles.screen}> {text} </div>
      <div className={calcContainerStyles.calcNumButtonContainer}>
        <div className={calcContainerStyles.calcDigitsContainer}>
          {nums[0].map(element => (
            <NumButton
              element={element}
              type='digit'
              handleNumClick={handleNumClick}
              // setText={setText}
              text={text}
              content={element} key={Math.random() * 10} />))}
        </div>

        <div className={calcContainerStyles.calcSignContainer}>
          {nums[1].map(element => (
            // if(element==='='){
            // <NumButton onClick={handleEqual}
            // } else {
            <NumButton
              key={Math.random() * 10}
              value={element}
              content={element}
              // setText={setText}
              text={text}
              handleNumClick={handleNumClick}
            />
          // }
           ))}
        </div>
      </div>

    </div>
  )
}

export default Calc