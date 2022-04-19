import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { myAsyncAction } from '.';

function App() {
  let state = useSelector((storeObject)=>{
    return storeObject;
  });
  let dispatch = useDispatch();
  return (
    <div className="App">
        {console.log(state.name)}
        <h1>{state.name}</h1>
        <button onClick={()=>{ dispatch(myAsyncAction()) }}>Change My Name </button>
    </div>
  );
}

export default App;
