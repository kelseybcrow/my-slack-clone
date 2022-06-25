import React from 'react';
import './Header.css';
// import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                {/* <Avatar classname='header__avatar' /> */}
                <AccessTimeIcon />
                <h2>Header left</h2>
            </div>
            <div className='header__search'></div>
            <div className='header__right'></div>
        </div>
    );
}

export default Header;
