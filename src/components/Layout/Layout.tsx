import { NavLink, Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {

    return(
        <div className='container'>
            <header className='header'>
                <div className='linkContainer'>
                    <NavLink className='link' to="/">HOME</NavLink>
                    <NavLink className='link' to="/trainingAsyncSelect">TRAINING ASYNC SELECT</NavLink>
                </div>
            </header>
            <body className='outletContainer'>
                <Outlet/>
            </body>
            {/*<footer className='footer'>2023</footer>*/}
        </div>
    )
}

export default Layout;