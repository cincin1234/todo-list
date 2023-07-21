import React from 'react';
import './App.css';

function App() {
  const [items, setItems] = React.useState<string[]>([])
  const [heehee, setHeehee] = React.useState("")
  function buttonClick(){
    console.log(heehee)
    setItems(items.concat(heehee))
  }

  function changes(event: React.ChangeEvent<HTMLInputElement>){
    //console.log(event.target.value)
    setHeehee(event.target.value)
  }

  // const element = [<div>hello</div>, <div>hi</div>, <div>bye</div>];
  const box=[]
  for (let haha of items) {
    const desk = <div>{haha}</div>
    box.push(desk)
  }

  return (
    <div className="App">
      <div className="Left">
        <input type="text" id="heehee" onChange={changes}>

        </input>

        <button onClick={buttonClick}>
          +
        </button>
      </div>

      <div className="Right">
        {box}
      </div>
    </div>
  );
}

export default App;
