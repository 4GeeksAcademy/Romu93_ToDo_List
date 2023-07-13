import { element } from "prop-types";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const myList = []
export const TheToDoList = () => {
    
    const [myNote, setMyNote] = useState("");

    const handleInput = e => {
        setMyNote(e.target.value)        
    }
    function pushMyList( e){
        if (e.key == "Enter"){
            myList.push(myNote)
            setMyNote("")
        }       
    };

    //const showtheTrash = () => {
    //    return("<button type=`button` className=`btn btn-light`>`<GrClose/>`</button>")
    //}onMouseOver={showtheTrash}

   // function handleDelet (e) {
     //   setMyNote(muList.filter(e => e.id !== task.id)
    //)};

    const task  = myList.map(element =>{
        return (
        <li key={element.id} id="task" className="list-group-item">{element}
        <button type="button" id="button" className="btn-close"></button> </li>        
        )
    });
    
    return(
        <div calssName="d-flex justify-content-center">
            <div >            
                <input type="input" id="theInput"className="form-control" onChange={handleInput} value={myNote} onKeyDown={pushMyList} placeholder="What Need To Be Done?"/>
            </div>
            <ul className="list-group">
                {task} 
            </ul> 
        </div>                
               
    )
}

 