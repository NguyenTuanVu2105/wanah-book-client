import React from 'react'
import './Messages.scss'
import { Input, Avatar, message, Button } from "antd"

import { user_contact, messages } from './data/Message'
const { Search } = Input

const Messages = () => {
    const user_id = 6;
    return (
        <div className="messages">
            <div className="messages-chat">
                <div style={{height: "calc(100vh - 105px)", overflow: "overlay"}}>
                    {
                        messages.map(message => {
                            if (message.sender === user_id) {
                                return (
                                    <div className="messages-chat-sender">
                                        <pre className="messages-chat-sender-content"> {message.content} </pre>
                                    </div>

                                )
                            } else {
                                var user_send = user_contact.find(user => user.id === message.sender)
                                return (
                                    <div className="messages-chat-receiver">
                                        <Avatar src={user_send.avatar}></Avatar>
                                        <pre className="messages-chat-sender-content"> {message.content} </pre>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <Search
                    placeholder="Aa"
                    enterButton="Gửi"
                    size="medium"
                    style={{ position: 'absolute', bottom: 5, width: '68%', borderRadius: 30 }}
                    onSearch={value => console.log(value)}
                />


            </div>
            <div className="messages-search">
                <Search
                    placeholder="Tìm kiếm"
                    onSearch={value => console.log(value)}
                    style={{ borderRadius: "0", marginBottom: '10px' }}
                    size="small"
                />
                {
                    user_contact.map(user => (
                        <div className="messages-chat-box">
                            <div style={{ width: '20%' }}><Avatar src={user.avatar}></Avatar></div>
                            <div className="messages-chat-box-content">
                                <strong> {user.name}</strong>
                                <div className="text-more" style={{ width: '100%', marginTop: '8px' }}> {user.last_message} </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Messages