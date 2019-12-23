import React, { useState, useEffect, useContext } from 'react'
import './Messages.scss'
import {Input, Avatar, Empty, message} from "antd"
import AppContext from '../../AppContext'
import { user_contact } from './data/Message'
import { useParams, withRouter } from 'react-router-dom'
import { getMessage, getContacts, addMessage } from '../../api/base/message'
import { getUserDetail } from '../../api/base/user'
import {parseImage} from '../../helper/parse/parser'
const { Search } = Input

const Messages = (props) => {
    const context = useContext(AppContext)
    const {id} = useParams()
    const [userContact, setUserContact] = useState({})
    const [value, setValue] = useState('')
    const [contacts, setContacts] = useState([])
    const [messages, setMessages] = useState([])
    const _fetchData = async () => {
        const result = await getUserDetail(id)
        if (result.success) {
            setUserContact(result.data)
        }

    }
    const _getMessage = async() => {
        const result = await getMessage(id)
        if (result.success) {
            setMessages(result.data)
        }
    }

    const _getContacts = async() => {
        const result = await getContacts()
        if (result.success) {
            setContacts(result.data)
        }
    }
    useEffect(() => {
        _getContacts()
    }, [context.user.id])
    useEffect(() => {
        _getMessage()
    }, [id])
    useEffect(() => {
        _fetchData()
    }, [id])

    const handleAddMessage = () => {
        addMessage(id, value)
        var message = {
            fromId: parseInt(context.user.id),
            content: value,
            toId: userContact.id
        }
        setMessages([...messages, message])
        setValue('')
    }

    const style = {
        background: '#e6e6e6'
    }
    useEffect(() => {
        var chat = document.getElementById('chat-container')
        if (chat)
            chat.scrollTop = chat.scrollHeight
    })
    return (
        <div className="messages">
            <div className="messages-chat">
                <div id="chat-container" style={{height: "calc(100vh - 101px)", overflow: "overlay"}}>
                    {
                        messages.length > 0 ?
                        messages.map(message => {
                            if (!message.content) return
                            console.log(message.fromId, parseInt(context.user.id))
                            if (message.fromId === parseInt(context.user.id)) {
                                return (
                                    <div className="messages-chat-sender">
                                        <pre className="messages-chat-sender-content"> {message.content} </pre>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="messages-chat-receiver">
                                        <Avatar src={userContact.profile ?  parseImage(userContact.profile.avatar) : null}></Avatar>
                                        <pre className="messages-chat-sender-content"> {message.content} </pre>
                                    </div>
                                )
                            }
                        }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                    }
                </div>
                { contacts.length > 0 &&
                                    <Search
                                    placeholder="Aa"
                                    enterButton="Gửi"
                                    size="medium"
                                    style={{ position: 'absolute', bottom: 5, width: '68%', borderRadius: 30 }}
                                    value ={value}
                                    onChange ={(e) => setValue(e.target.value)}
                                    onSearch={handleAddMessage}
                                />
                }


            </div>
            <div className="messages-search">
                {
                    contacts.length > 0 ?
                    contacts.map(user => (
                        <div className="messages-chat-box" style={user.id === parseInt(id) ? style : null} onClick={() => props.history.push(`/message/${user.id}`)}>
                            <div style={{ width: '20%' }}><Avatar src={parseImage(user.profile.avatar)}></Avatar></div>
                            <div className="messages-chat-box-content">
                                <div> {user.profile.first_name + " " + user.profile.last_name}</div>
                            </div>
                        </div>
                    )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
                }

            </div>
        </div>
    )
}

export default withRouter(Messages)