import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import MailIcon from '@mui/icons-material/Mail'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [channels, setChannels] = useState([])
    const [{ user }] = useStateValue()

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        )
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__info'>
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
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

            {channels.map((channel) => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
