import React, {useEffect, useState} from 'react'
import {UilPen, UilTrash} from "@iconscout/react-unicons";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import "./../../../style/dashboard/ticket.css"
import './../../../style/dashboard/Admin/addAdmin.css'
import {prefixer} from 'stylis'
import {CacheProvider, ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import api from "../../../api/api";

// Create RTL MUI
const theme = createTheme({
    direction: 'rtl',
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export default function Admins (props) {
    useEffect(() => {
        if (localStorage.getItem('role') !== "MANAGER") {
            localStorage.clear()
            props.history.push("/sign-in")
        }
    }, [props.history]);

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        if (localStorage.getItem('role') !== "MANAGER") {
            localStorage.clear()
            window.location = ("/sign-in")
        }
        setConstructorHasRun(true);
    };
    constructor()

    const getAdmins = async () => {
        const getAdminsResponse = await api.get("user/search?role=ADMIN")
        setAdmins(getAdminsResponse.data)
    }
    useEffect(() => {
        getAdmins()
    }, []);

    const [admins, setAdmins] = useState([]);
    const [addAdmin, setAddAdmin] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        role: 'ADMIN'
    });
    const [adminEdit, setAdminEdit] = useState({
        firstName: '',
        lastName: '',
        password: ''
    });
    const [open, setOpen] = React.useState(false);
    const [openAddAdmin, setOpenAddAdmin] = React.useState(false);
    const [openEditAdmin, setOpenEditAdmin] = React.useState(false);
    const [adminTarget, setAdminTarget] = React.useState();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseEdit = () => {
        setAdminTarget('')
        setOpenEditAdmin(false);
    };
    async function handleOpenEdit(admin) {
        setAdminEdit(admin)
        setAdminTarget(admin.id)
        setOpenEditAdmin(true);
    }
    function handleEditAdmin ()  {
        api.put(`user/${adminTarget}`, adminEdit)
        setOpenEditAdmin(false);
    }
    const onChangeInputEdit = (e) => {
        setAdminEdit({
            ...adminEdit,
            [e.target.name]: e.target.value
        })
    }
    const handleOpenAddAdmin = () => {
        setOpenAddAdmin(true);
    };
    const handleCloseAddAdmin = () => {
        setOpenAddAdmin(false);
    };
    const onChangeInput = (e) => {
        setAddAdmin({
            ...addAdmin,
            [e.target.name]: e.target.value
        })
    }
    const handleAddAdmin = async () => {
        await api.post("user", addAdmin)
        getAdmins()
        setOpenAddAdmin(false);
    }
    const handleRemoveAdmin = async e => {
        await api.delete(`user/${e.target.getAttribute("id")}`)
        getAdmins()
        setOpen(false);
    }

    return (
        <>
            <div className="ticket-box">
                <div className="ticket-box-header">
                    <div className="ticket-box-title">ادمین ها</div>
                    <button  variant="outlined" onClick={handleOpenAddAdmin}>ثبت ادمین جدید</button>
                    <Dialog open={openAddAdmin} onClose={handleCloseAddAdmin}>
                        <DialogTitle>ثبت ادمین</DialogTitle>
                        <DialogContent>
                            <CacheProvider value={cacheRtl}>
                                <ThemeProvider theme={theme}>
                                    <div dir="rtl">
                                        <div className="d-flex flex-column px-4 mt-2">
                                            <TextField
                                                className='mb-4'
                                                name="firstName"
                                                label="نام"
                                                value={addAdmin.firstName}
                                                onChange={onChangeInput}
                                            />
                                            <TextField
                                                className='mb-4'
                                                name="lastName"
                                                label="نام خانوادگی"
                                                value={addAdmin.lastName}
                                                onChange={onChangeInput}
                                            />
                                            <TextField
                                                className='mb-4'
                                                name="phoneNumber"
                                                label="شماره موبایل"
                                                value={addAdmin.phoneNumber}
                                                onChange={onChangeInput}
                                            />
                                            <TextField
                                                className='mb-4'
                                                name="password"
                                                label="رمز عبور"
                                                value={addAdmin.password}
                                                onChange={onChangeInput}
                                            />
                                        </div>
                                    </div>
                                </ThemeProvider>
                            </CacheProvider>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleAddAdmin}>ثبت ادمین</Button>
                            <Button onClick={handleCloseAddAdmin}>بستن</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="ticket-box-body">
                    <table>
                        <thead>
                        <tr>
                            <th>شماره</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>شماره موبایل</th>
                            <th>رمز عبور</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            admins.map((u, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{u.firstName}</td>
                                    <td>{u.lastName}</td>
                                    <td>{u.phoneNumber}</td>
                                    <td>{u.password}</td>
                                    <td>
                                        <button className='project-button-delete' onClick={handleClickOpen}>
                                            <UilTrash/>
                                        </button>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"آیا از حذف این کاربر مطمئن هستید؟"}
                                            </DialogTitle>
                                            <DialogActions>
                                                <Button onClick={handleClose}>بستن</Button>
                                                <Button onClick={handleRemoveAdmin} id={u.id} autoFocus>
                                                    حذف
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                        <button
                                            variant="outlined"
                                            className='project-button-edit'
                                            onClick={() => handleOpenEdit(u)}
                                            id={u.id}
                                        >
                                            <UilPen/>
                                        </button>
                                        <Dialog open={openEditAdmin} onClose={handleCloseEdit}>
                                            <DialogTitle>ویرایش ادمین</DialogTitle>
                                            <DialogContent>
                                                <CacheProvider value={cacheRtl}>
                                                    <ThemeProvider theme={theme}>
                                                        <div dir="rtl">
                                                            <div className="d-flex flex-column px-4">
                                                                <TextField
                                                                    className='mb-4'
                                                                    name="firstName"
                                                                    label="نام"
                                                                    value={adminEdit.firstName}
                                                                    onChange={onChangeInputEdit}
                                                                />
                                                                <TextField
                                                                    className='mb-4'
                                                                    name="lastName"
                                                                    label="نام خانوادگی"
                                                                    value={adminEdit.lastName}
                                                                    onChange={onChangeInputEdit}
                                                                />
                                                                <TextField
                                                                    className='mb-4'
                                                                    name="password"
                                                                    label="رمز عبور"
                                                                    value={adminEdit.password}
                                                                    onChange={onChangeInputEdit}
                                                                />
                                                            </div>
                                                        </div>
                                                    </ThemeProvider>
                                                </CacheProvider>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button id={u.id} onClick={() => handleEditAdmin(u.id)}>ویرایش</Button>
                                                <Button onClick={handleCloseEdit}>بستن</Button>
                                            </DialogActions>
                                        </Dialog>
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