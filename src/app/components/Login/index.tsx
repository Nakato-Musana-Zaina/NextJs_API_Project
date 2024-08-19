"use client"

import { ChangeEvent, useState } from "react";
import { userLogin } from "../../../../utils/uselLogin";

const Login= ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


      console.log(username)
      console.log(password)


    const handleLogin = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        try {
            setLoading(true);
            const response = await userLogin ({username, password})
            console.log(response)
            setLoading(false)
        }
        catch(error){
            setError((error as Error).message)
        setLoading(false)
        }
    }
    
    return(
        <div>
            <form className="m-80" onSubmit={handleLogin}>
                <h2 className="text-4xl text-center"> LOGIN</h2>
                <br/>
                <label> User Name</label>
                <br/>
                <input
                placeholder="Enter UserName"
                type="text"
                className="border border-gray-300 rounded-md w-full py-3 px-4 mt-1 text-black "
                required
                onChange={(event:ChangeEvent<HTMLInputElement>)=> setUsername(event.target.value)} 
                />
                <br/>
                <br/>
                 <label> Password</label>
                 <br/>
                <input
                placeholder="Password"
                type="password"
                className="border border-gray-300 rounded-md w-full py-3 px-4 mt-1 text-black "
                required
                onChange={(event:ChangeEvent<HTMLInputElement>)=> setPassword(event.target.value)} 
                />
                <br/>
                <br/>
                <button type="submit"  className="bg-green-500 text-wjite py-2 px-3 rounded-md"> {loading? 'loading...':'submit'}</button>

                {error && <small className="text-red-500" > {error}</small>}
            </form>
        </div>
    )
}
export default Login;