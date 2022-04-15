import { createContext, useEffect } from "react"


const defaultState = {
   calc: [
      // {
      //    id:,
      //    num: 0,
      //    screenText: 0,
      //    sign: null,
      //    result: '';
      // }
   ]


}

// class stateClass {
//    constructor(defaultState) {

//       this.result = defaultState.num
//    }
//    plus () {
//       return{
//          ...state, sign: '+', screenText: screenText.push(action, sign), 
//       }
//    }
// }

const ACTIONS = {
   ADDCALC: 'ADDCALC',
   PLUS: 'PLUS',
   MINUS: 'MINUS',
   DIVIDE: 'DIVIDE',
   MULTIPLY: 'MULTIPLY',
   EQUAL: 'EQUAL',
}



function reducer(state, action) {

   switch (action.type) {

      case ACTIONS.ADDCALC: {
         return {
            ...state, calc:
               [...state.calc,
               {
                  id: Math.random() * 100,
                  num: 0,
                  sign: '',
                  result: 0,
               }
               ]
         }
      }

      case ACTIONS.PLUS: {
         return {
            ...state, calc: [
               state.calc.map((item) => {
                  console.log('consoling: item :::', item)
                  if (item.id === action.id) {
                     item.num = item.num += item.screenText
                     item.sign = '+'
                  }
                  return state;
               })
               //    ...state.calc, {
               //    num: num+=screenText,
               //    screenText: (prev) => { prev.concat(action.sign) },
               //    sign: '+',
               // }
            ]
            // ...state, state: {...calc,  screenText: (prev) => { prev.concat(action.sign) }, sign: '+' }
            // calc: { ...state.calc, calc: { screenText: (prev) => { prev.concat(action.sign) }, sign: '+' } }

         }
      }
      case ACTIONS.MINUS: {
         return {
            ...state,
            calc: {
               id: '',
               num: 0,
               screenText: (prev) => { prev.concat(action.sign) },
               sign: '-',
            }
         }
      }
      case ACTIONS.DIVIDE: {
         return {
            ...state,
            calc: {
               id: '',
               num: 0,
               screenText: (prev) => { prev.concat(action.sign) },
               sign: '/',
            }
         }
      }
      case ACTIONS.MULTIPLY: {
         return {
            ...state,
            calc: {
               id: '',
               num: 0,
               screenText: (prev) => { prev.concat(action.sign) },
               sign: '*',
            }
         }
      }
      case ACTIONS.EQUAL: {
         return {
            ...state, calc:
               [...state.calc,
               {
                  id: '',
                  num: 0,
                  screenText: (prev) => { prev.concat(action.sign) },
                  sign: '=',
               }
               ]
         }

      }
   }






} /*   REDUCER SCOPE END    */



export { ACTIONS, reducer, defaultState }
export const State = createContext(defaultState)
