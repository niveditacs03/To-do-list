import React from "react"
import "./index.css" 

function InputArea(props)
{
    return  <div className="form">
        <input type="text" 
        onChange={props.onItem} 
        value={props.value} 
        onKeyDown={props.onKeyDown}/>
        <button onClick={props.add} >
          <span>Add</span>
        </button>
      </div>
}
export default InputArea