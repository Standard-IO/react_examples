import { NavLink as NavLinkReactRouter } from "react-router-dom";


/*
This navlink help us to show what link in the navbar is active is only
to show the user what is selected in the navbar
*/

// our NavLink

export const NavLink = ({ to, children, ...props }) => {
    return (
     <NavLinkReactRouter
     {...props}
     className={({ isActive }) => {
       return isActive ? 'is-active' : undefined
     }}
     to={to}>
       {children}
     </NavLinkReactRouter>
    )
 }

