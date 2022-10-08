import { useState } from "react"
import Buttons from "./Buttons";
import Pool from "./Pool";
const App = () => {
  let [count, setCount] = useState(0);
  let start,interval;
  function add(){
    start = Date.now();
    interval = setInterval(()=>{
      setCount(n => n+1);
      if(Date.now()-start > 6000) clearInterval(interval);
    },1000);
  }
  function del(){
    start = Date.now();
    interval = setInterval(()=>{
      setCount(n => n-1);
      if(Date.now()-start > 6000) clearInterval(interval);
    },1000);
  }
  return (
    <div>
      {count}
      <Buttons add={add} del={del} count={count} />
      <Pool count={count} />
    </div>
  )
}

export default App