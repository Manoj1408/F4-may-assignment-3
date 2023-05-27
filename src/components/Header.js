import React from 'react';

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
        <div className='head'>
            <NavLink to="/">
                Header
            </NavLink>
            <div className='right'>
             <NavLink to="/">
                Signup
             </NavLink>
             <NavLink to="/profile">
                    Profile
             </NavLink>
            </div>
        </div>
    </>
  )
}
