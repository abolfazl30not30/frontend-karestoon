import React,{useState} from "react"
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./../../../style/dashboard/ticket.css"


function ManagerTicket() {
    const [tickets,setTickets] = useState([
        {
            title : 'پول میخوام',
            status: 'در انتظار برسی',
            date : '1401/05/09'
        },
        {
            title : 'پول میخوام',
            status: 'در انتظار برسی',
            date : '1401/05/09'
        },
        {
            title : 'پول میخوام',
            status: 'در انتظار برسی',
            date : '1401/05/09'
        },
        {
            title : 'پول میخوام',
            status: 'در انتظار برسی',
            date : '1401/05/09'
        }
    ])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="ticket-box">
                <div className="ticket-box-header">
                    <div className="ticket-box-title">سوابق تیکت ها</div>
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
                            tickets.map((t,i) => (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{t.title}</td>
                                    <td>{t.status}</td>
                                    <td>{t.date}</td>
                                    <td>
                                        <Link to='chat'>
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
export default ManagerTicket