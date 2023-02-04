import React, {useState} from "react";
import "../../../style/dashboard/Admin/crowdFounding.css";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {UilPen, UilTrash} from '@iconscout/react-unicons';


function CrowdFunding() {

    const [project, setProject] = useState([
        {
            name: 'برای میلاد',
            requiredAmount: '69000000',
            collectedAmount: '50000000',
            startDate: '1401/05/06',
            endDate: '1401/05/06',
            type: "ضروری",
            id : '1'
        },
        {
            name: 'برای میلاد',
            requiredAmount: '69000000',
            collectedAmount: '50000000',
            startDate: '1401/05/06',
            endDate: '1401/05/06',
            type: "ضروری",
            id : '2'
        },
        {
            name: 'برای میلاد',
            requiredAmount: '69000000',
            collectedAmount: '50000000',
            startDate: '1401/05/06',
            endDate: '1401/05/06',
            type: "ضروری",
            id : '3'
        },
        {
            name: 'برای میلاد',
            requiredAmount: '69000000',
            collectedAmount: '50000000',
            startDate: '1401/05/06',
            endDate: '1401/05/06',
            type: "ضروری",
            id : '7'
        }, {
            name: 'برای میلاد',
            requiredAmount: '69000000',
            collectedAmount: '50000000',
            startDate: '1401/05/06',
            endDate: '1401/05/06',
            type: "ضروری",
            id : '9'
        }

    ]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRemoveProject = e => {
        const projectId = e.target.getAttribute("id")
        setProject(project.filter(item => item.id !== projectId))


        setOpen(false);
    }
    const editProject = () => {
        console.log('edit')
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
                            <th>تاریخ انتشار</th>
                            <th>تاریخ اتمام</th>
                            <th>نوع</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            project.map((p, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{p.name}</td>
                                    <td>{p.requiredAmount}</td>
                                    <td>{p.collectedAmount}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.endDate}</td>
                                    <td>{p.type}</td>
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
                                                {"آیا از حذف این پروژه مطمئن هستید؟"}
                                            </DialogTitle>
                                            <DialogActions>
                                                <Button onClick={handleClose}>بستن</Button>
                                                <Button onClick={handleRemoveProject} id={p.id} autoFocus>
                                                    حذف
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                        <Tooltip title="ویرایش" placement="top-start">
                                            <button className='project-button-edit' onClick={editProject}>
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