import React, {useEffect, useState} from "react";
import "./../../../style/dashboard/chat.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useNavigate, useParams} from "react-router-dom";
import api from "../../../api/api";
import {deepOrange, deepPurple} from "@mui/material/colors";

function AdminChat(props) {
    useEffect(() => {
        if (localStorage.getItem('role') !== "ADMIN") {
            localStorage.clear()
            props.history.push("/sign-in")
        }
    }, [props.history]);

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        if (localStorage.getItem('role') !== "ADMIN") {
            localStorage.clear()
            window.location = ("/sign-in")
        }
        setConstructorHasRun(true);
    };
    constructor()
    const {id} = useParams()
    const getChat = async () => {
        const chatResponse = await api.get(`ticket/${id}`)
        setChat(chatResponse.data)
    }
    useEffect(() => {
        getChat()
    }, []);

    const [chat, setChat] = useState({
        title: "",
        chatList: []
    })
    const [typedMessage, updateTypedMessage] = useState()


    const handleSendMessage = async () => {
        await api.put(`ticket/${id}`, {
            status: "answered",
            chatList: [
                {
                    sender: "admin",
                    message: typedMessage
                }
            ]
        })
        updateTypedMessage("")
        getChat()
    }

    return (
        <>
            <div className="chat-box">
                <div className="chat-box-header">
                    ثبت تیکت
                </div>
                <div className="chat-box-body">
                    {/*<div className="col-12 my-2 px-2">
                        <label htmlFor="ticket-title" className="font-bold pr-1">عنوان تیکت</label>
                        <input id="ticket-title" type="text" tabIndex="1" placeholder="تیکت شماره یک"
                               className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                               autoFocus=""
                        />
                    </div>*/}
                    <div className="d-flex justify-content-center">
                        <div className="chat-messenger">
                            <div className="chat-messenger-header">
                                {chat.title}
                            </div>
                            <div className="chat-messenger-body">
                                {
                                    chat.chatList.map((mes) => (
                                        mes.sender === 'admin'
                                            ? (
                                                <>
                                                    <div className="d-flex justify-content-center">
                                                        <div className='chat-messenger-time'>{mes.date}</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d-flex flex-column">
                                                            <div className='chat-messenger-item-info'>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Avatar sx={{bgcolor: deepOrange[500]}}
                                                                            className='ms-2'>پ</Avatar>
                                                                </Stack>
                                                                <span> پشتیبان</span>
                                                            </div>
                                                            <div className='chat-messenger-item admin-message'>
                                                                {mes.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>

                                            )
                                            : (
                                                <>
                                                    <div className="d-flex justify-content-center">
                                                        <div className='chat-messenger-time'>{mes.time}</div>
                                                    </div>
                                                    <div className="d-flex justify-content-start">
                                                        <div className="d-flex flex-column">
                                                            <span className='chat-messenger-item-info'>
                                                             <Stack direction="row" spacing={2}>
                                                                    <Avatar sx={{bgcolor: deepPurple[500]}}
                                                                            className='ms-2'>{mes.sender.slice(0, 1)}</Avatar>
                                                                </Stack>
                                                            <span>{mes.sender}</span>
                                                        </span>
                                                            <div className='chat-messenger-item user-message'>
                                                                {mes.message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                    ))
                                }
                            </div>
                            <div className="chat-messenger-footer">
                                <input type='text' placeholder='یک پیام تایپ کنید'
                                       onChange={(e) => updateTypedMessage(e.target.value)}
                                       value={typedMessage}/>
                                <button className='send-message' onClick={handleSendMessage}>ارسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminChat