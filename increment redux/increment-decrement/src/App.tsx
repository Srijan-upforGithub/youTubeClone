import './App.css'
import { useDispatch ,useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { incNumber,decNumber } from './redux/action'
import { state } from './redux/store'

function App() {
  const dispatch = useDispatch()
  const currValue = useSelector((state:state)=>state.changeValue);

   return <>
   <Container>
    <h1>Increment and Decrement</h1>
    <div>
      <button onClick={()=>dispatch(decNumber())} disabled={currValue===0}>-</button>
      <h5>{currValue}</h5>
      <button onClick={()=>dispatch(incNumber())}>+</button>
    </div>
   </Container>
   </>
}

const Container = styled.div`
max-width: 1600px;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
`

export default App
