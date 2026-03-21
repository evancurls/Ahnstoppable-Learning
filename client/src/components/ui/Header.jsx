import React from "react";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

function Header({ rightContent }){
    const navigate = useNavigate();
    return(
        <header className="flex justify-between mb-2 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-8">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-4xl tracking-tighter cursor-pointer"
            onClick={() => {navigate("/home");}}>
                AHNSTOPPABLE LEARNING
            </h2>
            <div>
                {rightContent()}
                <DropdownMenu />
            </div>
        </header>
    );
}

export default Header;
