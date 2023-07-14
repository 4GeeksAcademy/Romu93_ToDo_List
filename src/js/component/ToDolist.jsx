import React, { useState } from "react";

export const TheToDoList = () => {

    const [myNote, setMyNote] = useState("");
    const [myListtask, setMyListtask] = useState([])

    const handleInput = e=> {
        setMyNote(e.target.value)        
    }
    function pushMyList(e){
        if (e.key == "Enter"){
            setMyListtask([...myListtask,myNote])
            setMyNote("")
        }       
    };
    const task  = myListtask.map(element =>{
            return (
                <li key={element.id} id="task" className="list-group-item">{element}
                <button type="button" id="button" className="btn-close" onClick={() => handleDelet(element)}></button> </li>        
            )
    });
    function handleDelet (element) {
        setMyListtask(myListtask.filter(item => item !== element)
       )};

    return(
        <div calssName="d-flex justify-content-center">
            <div >            
                <input type="input" id="theInput"className="form-control" onChange={handleInput} value={myNote} onKeyDown={pushMyList} placeholder="What Need To Be Done?"/>
            </div>            
            <ul className="list-group">                                
                {task} 
            </ul>
            <div className="diseño1 card card-body"> <small class="text-body-secondary"> {myListtask.length} item left </small></div>
            <div className="diseño2 card"></div>
            <div className="diseño3 card"></div>
            <div className="diseño4 card"></div>
        </div>                
    )
}