import React, { useEffect, useState } from 'react'
import API from '../../../api/API'
import "./Messages.css"


const Messages = () => {
    const [messages , setMessages] = useState([])
    const [nomessages , setNomessages] = useState('')

    useEffect(() => {
       API.get("api/allmessage").then((res) => {
           if(res.data.length === 0 ) {
               setNomessages('no messages')
           }else{
               setMessages(res.data)
           }
       })
    }, [])
    console.log(messages)
    return (
        <>
            <div className="Messages-Container">
                {nomessages && (
                    <h2> {nomessages} </h2>
                )}
                {messages &&
                    messages.map((list) => {
                        return <div className="Messages-Cards">
                        <div className="Client-Informations">
                            <span>{list.name}</span>
                            <span>{list.email}</span>
                        </div>
                        <div className="Client-Text">
                            <h3>Message</h3>
                            <span>
                                {list.text}
                            </span>
                        </div>  
                    </div>
                    })
                }
            </div>
        </>
    )
}

export default Messages
