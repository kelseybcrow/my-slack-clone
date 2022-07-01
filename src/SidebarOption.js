import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className='sidebarOption_channel'>
                    <span className='sidebarOption__hash'># {title}</span>
                </h3>
            )}
        </div>
    );
}

export default SidebarOption;
