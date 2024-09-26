import { useState } from "react"

function AddTodoform(props){
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr

    const [newactivity,setnewactivity]=useState("")
    function handlechange(event){
        setnewactivity(event.target.value)
    }
    function addactivity(){
        setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
        setnewactivity([""])

    }
    
    return(
        <div className="flex flex-col gap-3">
    <div>
    <h1 className="text-2xl font-medium">Manage Activities</h1>
<input value={newactivity}  onChange={handlechange }type="text"className="border border-black bg-transparent p-1"placeholder="Next Activity? "/>
<button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
</div>
</div>

    )
}
export default AddTodoform