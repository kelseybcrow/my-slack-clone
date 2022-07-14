import React from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ user }] = useStateValue()

    return (
        <div className='header'>
            <div className='header__left'>
                <Avatar
                    className='header__avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
                {/* <h2>Header left</h2> */}
            </div>
            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search Clever Programmer'></input>
            </div>
            <div className='header__right'>
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
