import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users



    function handleUInput(event) {
        setEusername(event.target.value)
    }
    function handlePInput
        (event) {
        setEpassword(event.target.value)

    }

    function checkUser() {
        var userfound = false
        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successfull")
                userfound = true
                navigate("/landing", { state: { user: eusername } })
            }
        })
        if (userfound === false) {
            console.log("Login failed")
            setRuser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help  you to manage your activities after you Login:)</p> : <p className="text-red-500">"Please Signup before you Login"</p>
                    }
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text"
                            className="w-52 border-black p-1 bg-transparent border rounded-md"
                            placeholder="UserName"
                            onChange={handleUInput}
                        />
                        <input type="text"
                            className="w-52 border-black p-1 bg-transparent border rounded-md"
                            placeholder="Password"
                            onChange={handlePInput}

                        />

                        <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                        <p>Don't have an account? <Link to={"/signup"} className="underline">Sign up</Link></p>


                    </div>

                </div>
                </div>
    )
}

export default Login




