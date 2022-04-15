import { useContext } from 'react'
import { State } from '../state/state'

export default function useNumContext () {
   return useContext(State)
}