import { useState } from "react"

export default function Fruit () {
const [count, setCount] = useState(0);
 
const handleAdd = () => {
  const newCount = count + 1;
  setCount(newCount);
}

const handleMinus = () => {
  const newCount = count - 1;
  setCount(newCount);
}

const handleReset = () => {
  const newCount = count === 0;
  setCount(newCount);
}




  return(
    <div className="card">
      <h3>Counts for fruits: {count}</h3>
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleMinus}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}