import React from 'react';
import './calculator.css';
import CustomButton from '../../component/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearInputDisplay, clearResultDisplay, inputDisplay, resultDisplay } from '../../redux/reducer/displayReducer';

const numbers = [1, 2, 3,'+',4,5,6,'-',7,8,9,'*','C',0,'=','/'];
function Calculator() {

//   const [input,setInput] = useState("");
//   const [result,setResult] = useState("");
  const dispatch = useDispatch();
  const {inputValue,resultValue} = useSelector(state => state.display);

  console.log("input value",inputValue)
  console.log("result value",resultValue)
  const evaluateExp =(inputValue)=>{
    let result=null;
    try{
      result = eval(inputValue);
      return result;
    }catch(error){
      if(error instanceof EvalError){
         
      }
      else{
        if(inputValue[inputValue.length-1]==="+" 
        || inputValue[inputValue.length-1]==="-" 
        || inputValue[inputValue.length-1]==="*" 
        || inputValue[inputValue.length-1]==="/"){
          alert("Invalid Input");
        }
        else if(inputValue[0] === '/' || inputValue[0] === '*'){
          alert("Invalid Input");
        }
        else{
          return inputValue;
        }
        // return inputValue;
        
      }
    }
  }

  const handleInput = (value) => {
    dispatch(inputDisplay(value));
    // setInput(prev => prev + value);
  };

  const calculate = () => {
    dispatch(resultDisplay(evaluateExp(inputValue)))
    //setResult(eval(input).toString());
  };

  const clearInput = () => {
    dispatch(clearInputDisplay());
    dispatch(clearResultDisplay());
  };

  const handler =(pressedVal) =>{
    console.log("Pressed val", pressedVal);
      if(pressedVal==='C'){
        return clearInput(pressedVal);
      }
      else if(pressedVal ==='='){
        return calculate(pressedVal);
      }
      else{
        return handleInput(pressedVal);
      }
  }

  const renderButtons = () => {
    return numbers.map(val => 
    <CustomButton value={val} handleInput={() => handler(val)} />
    )
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          <div className='input'>{inputValue}</div>
          <div className='result'>{resultValue}</div>
        </div>
        <div className='buttons'>
          {renderButtons()}
        </div>
      </div>
    </div>
  );
}

export default Calculator;