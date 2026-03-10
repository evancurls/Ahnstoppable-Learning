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
        // background for screen
        <div className="bg-gray-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-120 w-full">

                    {/* sign in box */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm">
                        <h1 className="text-slate-900 dark:text-white text-center text-3xl font-semibold">
                            Sign in
                        </h1>
                    
                    {/* <form className="flex flex-col items-center justify-center gap-4">   */}
                        <form className="mt-12 space-y-6">
                            <div>
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-medium mb-2 block">
                                    User name
                                </label>
                                <div className="relative flex items-center">
                                    <input 
                                        name="email" 
                                        type="email" 
                                        id="email"
                                        required
                                        value={user.email}
                                        onChange={handleChange} 
                                        className="w-full text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-4 py-3 pr-10 rounded-md outline-blue-600 focus:ring-2 focus:ring-blue-500/20" 
                                        placeholder="Enter user name" 
                                    />

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 text-slate-400 dark:text-slate-500" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="text-slate-900 dark:text-slate-200 text-sm font-medium mb-2 block">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input 
                                        name="password" 
                                        type="password" 
                                        id="password"
                                        required
                                        value={user.password}
                                        onChange={handleChange} 
                                        className="w-full text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-4 py-3 pr-10 rounded-md outline-blue-600 focus:ring-2 focus:ring-blue-500/20" 
                                        placeholder="Enter password" 
                                    />
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900 dark:text-slate-300">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                                            Forgot your password?
                                        </a>
                                </div>
                            </div>
                            <div className="mt-12!">
                                <button type="button" className="w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all">
                                    Sign in
                                </button>
                            </div>
                            <p className="text-slate-900 dark:text-slate-400 text-sm text-center">
                                Don't have an account? 
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-1 font-semibold">
                                    Register here
                                </a>
                            </p>
                            <div className="my-4 flex items-center gap-4">
                                <hr className="w-full border-slate-300 dark:border-slate-700" />
                                <p className="text-sm text-slate-900 dark:text-slate-400 text-center">or</p>
                                <hr className="w-full border-slate-300 dark:border-slate-700" />
                            </div>
                            <button 
                                type="button" 
                                className="w-full flex items-center justify-center gap-4 py-2.5 px-6 text-[15px] font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer
                                        /* Light Mode Styles */
                                        text-slate-900 border border-slate-300 bg-slate-50 hover:bg-slate-100 
                                        /* Dark Mode Styles */
                                        dark:text-white dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700
                                        focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                                    {/* Google Colors stay the same regardless of mode for brand consistency */}
                                    <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" />
                                    <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" />
                                    <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" />
                                    <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" />
                                    <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" />
                                    <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" />
                                </svg>
                                Continue with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <div className="rounded-lg shadow-md p-6 border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 w-1/2 text-md normal-case font-medium text-olive-100">
            
        // </div>
    );
}

export default SignIn;



// {/* USERNAME INPUT FIELD */}
//                 <Input 
//                     label="Email"
//                     key={0}
//                     id="email"
//                     type="email"
//                     value={user.email}
//                     // FUNCTION WHEN ANYTHING IS TYPED IN FIELD
//                     onChange={handleChange}
//                 />

//                 {/* PASSWORD INPUT FIELD */}
//                 <Input 
//                     label="Password"
//                     key={1}
//                     id="password"
//                     type="password"
//                     value={user.password}
//                     // FUNCTION WHEN ANYTHING IS TYPED IN FIELD
//                     onChange={handleChange}
//                 />

//                 {/* SUBMIT BUTTON */}
//                 <input 
//                     className="border rounded-md px-3.5 py-2 opacity-100 text-md normal-case font-medium text-slate-600 shadow-zinc-500/50 bg-transparent border-current"
//                     type="submit" 
//                     // THIS FUNCTION IS CALLED WHEN I CLICK THE BUTTON:
//                     onClick={handleClick}
//                 >
//                 </input>
