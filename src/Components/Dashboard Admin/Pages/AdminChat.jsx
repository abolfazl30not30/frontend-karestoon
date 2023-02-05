import React, {useState} from "react";
import "./../../../style/dashboard/chat.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AdminAvatar from "./../../../assets/img/dashboard/admin.jpg"
import UserAvatar from "./../../../assets/img/dashboard/user.jpg"


function AdminChat() {
    const [ticket, updateTicket] = useState(
        {
            title: 'پول بده',
            chat: [
                {
                    sender: 'user',
                    time: '1401/09/07',
                    message: 'سلام'
                },
                {
                    sender: 'admin',
                    time: '1401/09/07',
                    message: 'سلام پشتیبانی در خدمتم'
                }
            ]
        }
    )
    const [typedMessage, updateTypedMessage] = useState()


    const handleSendMessage = () => {
       /* const newMessage = {
            sender: 'user',
            message: typedMessage
        }
        console.log(ticket)*/
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
                                {ticket.title}
                            </div>
                            <div className="chat-messenger-body">
                                {
                                    ticket.chat.map((mes) => (
                                        mes.sender == 'admin'
                                            ? (
                                                <>
                                                    <div className="d-flex justify-content-center">
                                                        <div className='chat-messenger-time'>{mes.time}</div>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d-flex flex-column">
                                                            <div className='chat-messenger-item-info'>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Avatar
                                                                        alt="ََAdmin"
                                                                        src={AdminAvatar}
                                                                        className='ms-2'
                                                                    />
                                                                </Stack>
                                                                <span>برادر پشتیبان</span>
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
                                                                <Avatar
                                                                    alt="ََAdmin"
                                                                    src={UserAvatar}
                                                                    className='ms-2'
                                                                />
                                                            </Stack>
                                                            <span>سروش</span>
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
                                       onChange={(e) => updateTypedMessage(e.target.value)}/>
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