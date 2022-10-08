import Water from "./Water"


const Pool = ({ count }) => {
  let arr = [];
  for (let i = 0; i < count; i++) arr.push(i);
  return (
    <div className="Pool">
      {
        arr.map(el => <Water key={el} />)
      }
    </div>
  )
}

export default Pool