import React,{useState} from "react";
import ToDo from "./components/ToDo";
import InputArea from "./components/InputArea";
import "./components/index.css";


const myArr=[]
function App() {

  const[item,setItem]=useState("");
  const[itemName,setItemName]=useState([]);
  const[key,setKey]=useState("");
  function handleItem(event)
  {
    setItem(event.target.value)
  }
  function addItem()
  {
    if(item.trim()!=="")
    {setItemName((prevValue)=>[...prevValue,item]);
    setItem("");}
  }
  function handleKey(event)
  {
    if(event.key==="Enter")
    {
      addItem()
    }
  }
  function deleteItem(id)
  {
    setItemName((prevValue)=>
      {
       return prevValue.filter((item,index) => 
        {
          return index!==id
        })
      })
    } 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onItem={handleItem}
      value={item}
      onKeyDown={handleKey}
      add={addItem}/>
      <div>
      <ul>
      {
        itemName.map((element,index) => (
          <ToDo key={index} id={index} text={element} onChecked={deleteItem}/>
        ))
      }
    </ul>
      </div>
    </div>
  );
}

export default App;

