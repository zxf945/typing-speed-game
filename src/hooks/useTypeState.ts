import { useState } from 'react'

type TypeState = 'start' | 'end' | 'finish'

const useTypeState = (
  initialState: TypeState,
): {
  typeState: TypeState
  setTypeState: React.Dispatch<React.SetStateAction<TypeState>>
} => {
  const [typeState, setTypeState] = useState<TypeState>(initialState)
  return { typeState, setTypeState }
}
export default useTypeState
