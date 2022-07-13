import React, { useState, useEffect } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import InfoIcon from '@mui/icons-material/Info'
import Message from './Message'

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection('rooms')
            .doc('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setRoomMessages(snapshot.docs.map((doc) => doc.data()))
            )
    }, [roomId])

    console.log(roomDetails)
    console.log('MESSAGES: ', roomMessages)

    return (
        <div className='chat'>
            <h2>You are in the {roomId} room</h2>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoIcon />
                    </p>
                </div>
            </div>
            <div className='chat__messages'>
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
