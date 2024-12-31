import React,{useState} from "react";

function ToDo(props) {
    const[line,setLine]=useState(false)

    function handleClick()
    {
        setLine(!line)
    }
  return <li
  onClick={()=>{
    props.onChecked(props.id)
  }}
  style={{ textDecoration: line ? "line-through": "" }}>{props.text}</li>;
}
export default ToDo;
