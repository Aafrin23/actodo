import AddTodoform from "./AddTodoform"
import Todolist from "./Todolist"
import { useState } from "react"



function Todocontainer(){
    const [activityarr,setactivityarr]=useState([
        {
        id:1,
        activity:"Go for a Walk",

    },
])

    return(
        <>
        <div className="flex  gap-5 flex-wrap">
<AddTodoform activityarr={activityarr} setactivityarr={setactivityarr}/>
       <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
        </div>
        </>
    )
}
export default Todocontainer