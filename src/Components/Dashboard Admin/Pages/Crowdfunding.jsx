import React, {useEffect, useState} from "react";
import "../../../style/dashboard/Admin/crowdFounding.css";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {UilPen, UilTrash} from '@iconscout/react-unicons';
import api from "../../../api/api";
import {useNavigate} from "react-router-dom";


function CrowdFunding() {
    useEffect(() => {
        if (localStorage.getItem('role') !== "ADMIN") {
            localStorage.clear()
            props.history.push("/sign-in")
        }
    }, [props.history]);

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        // const navigate = useNavigate();
        if (localStorage.getItem('role') !== "ADMIN") {
            localStorage.clear()
            window.location = ("/sign-in")
        }
        setConstructorHasRun(true);
    };
    constructor()
    const navigate = useNavigate();

    const [clickedProject, setClickedProject] = useState({});
    const [open, setOpen] = React.useState(false)
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        const projectsResponse = await api.get("project")
        setProjects(projectsResponse.data)
    }
    useEffect(() => {
        getProjects()
    }, []);

    const handleClickOpen = (p) => {
        setClickedProject(p)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRemoveProject = () => {
        api.delete(`project/${clickedProject.id}`).then(() => getProjects())
        setClickedProject({})
        setOpen(false);
    }
    const editProject = (id) => {
        navigate(`/admin/edit-crowd-funding/${id}`)
    }

    return (
        <>
            <div className="project-box">
                <div className="project-box-title">همه پروژه ها</div>
                <div>
                    <table className='project-box-table'>
                        <thead>
                        <tr>
                            <th>شماره</th>
                            <th>نام پروژه</th>
                            <th>مبلغ مورد نیاز</th>
                            <th>مبلغ جمع آوری شده</th>
                            <th>تاریخ شروع</th>
                            <th>وضعیت</th>
                            <th>اولویت</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            projects.map((p, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{p.title}</td>
                                    <td>{p.expectedBudge}</td>
                                    <td>{p.prepareBudge}</td>
                                    <td>{p.startDate}</td>
                                    <td>{
                                        p.status === "preparingBudge" ? "در حال تامین بودجه" : p.status === "doing" ? "در حال انجام" : p.status === "complete" ? "انجام شده" : null
                                    }</td>
                                    <td>{
                                        p.priority === "high" ? "ضروری" : p.priority === "medium" ? "متوسط" : p.priority === "low" ? "کم" : null
                                    }</td>
                                    <td>
                                        <button className='project-button-delete' onClick={() => handleClickOpen(p)}>
                                            <UilTrash/>
                                        </button>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"آیا از حذف این پروژه مطمئن هستید؟"}
                                            </DialogTitle>
                                            <DialogActions>
                                                <Button onClick={handleClose}>بستن</Button>
                                                <Button onClick={handleRemoveProject} autoFocus>
                                                    حذف
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                        <Tooltip title="ویرایش" placement="top-start">
                                            <button className='project-button-edit' onClick={() => editProject(p.id)}>
                                                <UilPen/>
                                            </button>
                                        </Tooltip>
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

export default CrowdFunding