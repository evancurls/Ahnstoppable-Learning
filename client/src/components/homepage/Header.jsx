import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../ui/DropdownMenu";

function Header({ rightContent }){
    return(
        <header className="flex justify-between mb-2 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-8">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold text-4xl tracking-tighter">
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
