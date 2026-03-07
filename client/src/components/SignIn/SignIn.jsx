import React, {useState} from "react";
import Input from "../ui/Input";


function SignIn(){
    // HOLDS USERNAME AND PASSWORD
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // UPDATES USERNAME OR PASSWORD
    function handleChange(event){
        const {name, value} = event.target;
        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    // FUNCTION WHEN SUBMIT BUTTON IS CLICKED
    function handleClick(event){
        console.log(user);
        event.preventDefault();
    }

    return (
        <div className="rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 text-md normal-case font-medium text-olive-100">
            <form className="flex flex-col items-center justify-center gap-4">  
                <h2> Sign in to your account </h2>
                <p> Don't have an account? <a href="">Sign up</a></p>


                {/* USERNAME INPUT FIELD */}
                <Input 
                    label="Email"
                    key={0}
                    id="email"
                    type="email"
                    value={user.email}
                    // FUNCTION WHEN ANYTHING IS TYPED IN FIELD
                    onChange={handleChange}
                />

                {/* PASSWORD INPUT FIELD */}
                <Input 
                    label="Password"
                    key={1}
                    id="password"
                    type="password"
                    value={user.password}
                    // FUNCTION WHEN ANYTHING IS TYPED IN FIELD
                    onChange={handleChange}
                />

                {/* SUBMIT BUTTON */}
                <input 
                    className="border rounded-md px-3.5 py-2 opacity-100 text-md normal-case font-medium bg-slate-50 text-slate-600 shadow-zinc-500/50 bg-transparent border-current"
                    type="submit" 
                    // THIS FUNCTION IS CALLED WHEN I CLICK THE BUTTON:
                    onClick={handleClick}
                >
                </input>
            </form>
        </div>
    );
}

export default SignIn;

