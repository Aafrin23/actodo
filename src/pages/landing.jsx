import Header from "../components/Header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";
import{useLocation} from "react-router-dom"





function Landing(){
    const data =useLocation()
    console.log(data.state.user)

    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user} />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
          <Card bgcolor={"#FD6663"} title={"November 23"} subtitle={"14:06:32"}></Card>
          <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>

        </div>
        <Todocontainer/>
      </div>
    </div>
    )
}
export default Landing