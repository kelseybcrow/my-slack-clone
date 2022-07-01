import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Rafeh Qazi
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={MailIcon} title='Mentions & reactions' />
            <SidebarOption Icon={DraftsIcon} title='Drafts' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} title='Add Channel' />
        </div>
    );
}

export default Sidebar;
