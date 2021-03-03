import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-primary navbar-dark'>
            <div className='container'>
                <a className='navbar-brand' href='#'><h3>Single Page App</h3></a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsible-nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='collapsible-nav'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
                        <li className='nav-item'><Link to='/help'className='nav-link'>Help</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header