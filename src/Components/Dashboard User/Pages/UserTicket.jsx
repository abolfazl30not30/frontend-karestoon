import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./../../../style/dashboard/ticket.css"
import api from "../../../api/api";


function UserTicket() {
    const [title, setTitle] = useState("");
    const getTickets = async () => {
        const getTicketsResponse = await api.get(`ticket/search?userId=${localStorage.getItem("phoneNumber")}`)
        setTickets(getTicketsResponse.data)
    }

    useEffect(() => {
        getTickets()
    }, []);

    const [tickets, setTickets] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitTicket = async () => {
        await api.post("ticket", {
            userId: localStorage.getItem("phoneNumber"),
            title: title,
            status: "pending"
        })
        getTickets()
        handleClose()

    }

    return (
        <>
            <div className="ticket-box">
                <div className="ticket-box-header">
                    <div className="ticket-box-title">سوابق تیکت ها</div>
                    <button variant="outlined" onClick={handleClickOpen}>ثبت تیکت جدید</button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>عنوان تیکت</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                لطفا عنوان تیکت خود را وارد کنید
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label=""
                                type="text"
                                fullWidth
                                variant="standard"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <button onClick={handleSubmitTicket}
                                    className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1e6y48t-MuiButtonBase-root-MuiButton-root'>
                                ثبت تیکت
                            </button>
                            {/*<Button onClick={handleClose}>ثبت تیکت</Button>*/}
                            <Button onClick={handleClose}>بستن</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="ticket-box-body">
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان</th>
                            <th>وضعیت</th>
                            <th>تاریخ</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tickets.map((t, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{t.title}</td>
                                    <td>{
                                        t.status === "pending" ? "در حال بررسی" : t.status === "answered" ? "پاسخ داده شده" : null
                                    }
                                    </td>
                                    <td>{t.date}</td>
                                    <td>
                                        <Link to={t.id}>
                                            <button>مشاهده</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default UserTicket