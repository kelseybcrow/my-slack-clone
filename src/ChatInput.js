import { Button as button } from '@mui/material'
import React from 'react'
import './ChatInput.css'
import { useState } from 'react'
import { useStateValue } from './StateProvider'

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('')
    const [{ user }] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault()

        if (channelId) {
            db.collection('rooms')
                .doc(channelId)
                .collection('messages')
                .add
                // message: input,
                // timestamp: firebase
                ()
        }
    }

    return (
        <div className='chatInput'>
            <form>
                <input placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type='submit' onClick={sendMessage}></button>
            </form>
        </div>
    )
}

export default ChatInput
