import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-4 lg:py-4 bg-stone-400">
    <div className="flex">
        <div className="flex-none w-36 h-14 text-xs p-2"><NavLink to='/'>E-commerce Microservice application</NavLink></div>
        <div className="grow h-14 px-12 flex flex-row space-x-14 items-center">
            <NavLink to='/'><button className="text-lg">Home</button></NavLink>
            <NavLink to='/order'><button className="text-lg">Orders</button></NavLink>
        </div>
        <div className="flex-none w-14 h-14 flex items-center text-xs"><NavLink to='/login'>Login</NavLink></div>
    </div>
</div>
}

export default Navbar