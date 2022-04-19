import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';



//Lets Build the store object
let rootReducer = (prevState=initialState,action)=>{
  let newState = prevState;
  switch(action.type){
    case 'CHANGE_TO_AKASH':
      console.log('CHANGE_TO_AKASH');
      return {
        ...newState,
        name:action.payload
      }
     
      //break;
    case 'CHANGE_TO_KIRAN':
      console.log('CHANGE_TO_KIRAN');
      return {
        ...newState,
        name:action.payload
      }
      //break;
    default:
      return {
        ...newState
      }
  }
  //return newState;
}

let actionCreator1 = ()=>{
  return { 
      type:'CHANGE_TO_AKASH',
      payload:'AAKASH RAWAL'
  }
}
//Async Action creator
export const myAsyncAction = ()=>{
    console.log('ok');
    return (dispatch, getState)=>{
        setTimeout(function(){
          console.log('OKOK');
          dispatch(actionCreator1());
        },5000);
    }
} 

let initialState = {
  name:'ANIL DOLLOR'
}
let store  = createStore(rootReducer,applyMiddleware(thunk));
//console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);
