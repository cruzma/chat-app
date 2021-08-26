import React from 'react';

function Nav(props){
    return(
        <Nav>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/About' >About</Link></li>
                <li><Link to='/Services' >Services</Link></li>
                <li><Link to='/Kind-words'>Kind Words</Link></li>
                <li><Link to='/Stories' >Stories</Link></li>
                <li><Link to='/Contact' >Contact</Link></li>
            </ul>
        </Nav>
    )
}

export default Nav;