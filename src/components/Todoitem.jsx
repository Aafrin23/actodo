function Todoitem(props){
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr

    function handleDelete(deleteid){
        var temparr=activityarr.filter(function(item){
            if(item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })
        setactivityarr(temparr)

    }
    return(
        <div className="flex justify-between" >
            <p>{props.index+1}.{props.activity}</p>
            <button className="text-red-500" onClick={function(){handleDelete(props.id)}}>DELETE</button>
            </div>
    )
}
export default Todoitem