import React from "react";
import todo from './images/todo.jpg'
import { useState } from "react";

const Todo =()=>{

const [inputdata , setinputdata]= useState('');
const [items , setitems] = useState([]);


const inputEvent =(e)=>{
    setinputdata(e.target.value);
}

const addItem =()=>{
    if(!inputdata){
     alert('Empty Data Cannot Insert')
    }
    else{

setitems([...items ,  inputdata]);
setinputdata('');
}
}

const deleteItem =(id)=>{
  const UpdatedItems = items.filter((elem , index)=>{
    return index !== id;
  })
  setitems(UpdatedItems);
  setinputdata('');
}

const RemoveAll =()=>{
    setitems([]);
}

return(
        <>
           <div className="main_div">
                <div className="child_div">
                    <figure>
                        <img src={todo} style={{ width : "100px", height : "100px"}} alt="Todo Image" />
                    </figure>
                <div className="additems">
                    <input type="text"  placeholder="✍️ Add Items..."  
                        value={inputdata} 
                        onChange={inputEvent}
                    /><i className="fa-solid fa-plus addbtn"onClick={addItem} title="Add Item"></i>
                </div>

                <div className="showItems">
                    {
                        items.map((elem , index)=>{
                                return (
                                    <div className="eachItem" key={index}>
                        <h3>{elem}</h3>
                        <i className="fa-solid fa-trash addbtn" onClick={()=>deleteItem(index)} title="Delete Item"></i>
                    </div>
                                )
                        })
                    }

                    
                </div>
                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All" onClick={RemoveAll}><span>Remove All</span></button>
                        </div>
                </div>
           </div>

        </>

    )
}
export default Todo;