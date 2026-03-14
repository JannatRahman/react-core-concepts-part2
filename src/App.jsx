import Counter from './counter'
import Batsman from './batsman' 

import './App.css'

function App() {
  
  function handleClick() {
    alert('I am Clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3.')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

 <div>
    <h1>React Core</h1>
    <Batsman></Batsman>
    <Counter></Counter>


      <button onClick={handleClick}>Click me</button>

      <button onClick={ function handleClick2(){
        alert('clicked 2')
      }}>Click me2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('click 4')}>Click Me 4</button> 

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
 </div>

    </>
     

      

      
  )
}

export default App
