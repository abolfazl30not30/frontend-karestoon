import React, {useEffect, useState} from "react";
import {useRef} from "react"
import {Editor} from '@tinymce/tinymce-react';
import {Calendar, DatePicker} from 'react-persian-datepicker';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "./../../../assets/img/SignUp/login.jpg"
import "../../../style/dashboard/Admin/createCrowdFounding.css"
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Link, useNavigate, useParams} from "react-router-dom";
import api from "../../../api/api";
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {RiFileUploadFill} from "react-icons/ri";
import ReactLoading from 'react-loading';
import Alert from 'react-bootstrap/Alert';

/*RTL MUI*/
const theme = createTheme({
    direction: 'rtl'
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const calendarStyles = {
    calendarContainer: 'calendarContainer',
    dayPickerContainer: 'dayPickerContainer',
    monthsList: 'monthsList',
    daysOfWeek: 'daysOfWeek',
    dayWrapper: 'dayWrapper',
    selected: 'selected',
    heading: 'heading',
    next: 'next',
    prev: 'prev',
    title: 'title',
}


export default function EditCrowdFunding() {
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
    const {id} = useParams()
    const navigate = useNavigate();

    const [reportFileId, setReportFileId] = useState("");
    const [uploadReportImageLoading, setUploadReportImageLoading] = useState(false);
    const [deleteReportImageLoading, setDeleteReportImageLoading] = useState(false);
    const [hasReportImageError, setHasReportImageError] = useState(false);
    const [isReportImageUpload, setIsReportImageUpload] = useState(false);
    const [reportImageUploadFile, setReportImageUploadFile] = useState([]);
    const [reportImageFileName, setReportImageFileName] = useState("");

    const [fileId, setFileId] = useState("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isUpload, setIsUpload] = useState(false);
    const [uploadFile, setUploadFile] = useState([]);
    const [fileName, setFileName] = useState("");
    const [startDateChanged, setStartDateChanged] = useState(false);
    const [endDateChanged, setEndDateChanged] = useState(false);
    const [project, setProject] = useState({})
    const [profileList, setProfileList] = useState([]);
    const getProject = async () => {
        const projectResponse = await api.get(`project/${id}`)
        setProject(projectResponse.data)
    }
    const getReport = async () => {
        const reportResponse = await api.get(`report/search?projectId=${id}`)
        setReport(reportResponse.data)
        let profileUrls = []
        for (let i = 0; i < reportResponse.data.length; i++) {
            await api.get(`file/${reportResponse.data[i].profileId}`, {responseType: 'blob'}).then(response => response.data)
                .then((data) => {
                    profileUrls.push(URL.createObjectURL(data));
                })
        }
        setProfileList([...profileUrls])
    }
    useEffect(() => {
        getReport()
        getProject()
    }, []);

    const [report, setReport] = useState([])
    const [newReport, setNewReport] = useState({
        title: '',
        description: '',
        date: '',
        projectId: id,
        profileId: ''
    })
    const [text, setText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSetEndDate = (date) => {
        setEndDateChanged(true)
        const convertedDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString()
        setProject(existingValue => ({
            ...existingValue,
            endDate: convertedDate
        }))
    }
    const handleSetStartDate = (date) => {
        setStartDateChanged(true)
        const convertedDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString()
        setProject(existingValue => ({
            ...existingValue,
            startDate: convertedDate
        }))
    }
    const handleSetReportDate = (date) => {
        const convertedDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString()
        setNewReport({
            ...newReport,
            date: convertedDate
        })
    }

    const handleInputFile = async (event) => {
        setUploadFile(event.target.files)
        setFileName(event.target.files[0].name)
    }
    const handleReportInputFile = async (event) => {
        setReportImageUploadFile(event.target.files)
        setReportImageFileName(event.target.files[0].name)
    }
    const handleUpload = async () => {
        setUploadLoading(true)
        let formData = new FormData();
        formData.append('file', uploadFile[0]);
        await api.post("file", formData)
            .then((response) => {
                console.log("post successful")
                setFileId(response.data.message.id)
                setIsUpload(true)
                setHasError(false)
                setUploadLoading(false)
            }).catch(() => {
                    console.log("error occurred")
                    setIsUpload(true)
                    setHasError(true)
                    setUploadLoading(false)
                }
            )
    }
    const handleReportImageUpload = async () => {
        setUploadReportImageLoading(true)
        let formData = new FormData();
        formData.append('file', reportImageUploadFile[0]);
        await api.post("file", formData)
            .then((response) => {
                console.log("post successful")
                setReportFileId(response.data.message.id)
                setIsReportImageUpload(true)
                setHasReportImageError(false)
                setUploadReportImageLoading(false)
            }).catch(() => {
                    console.log("error occurred")
                    setIsReportImageUpload(true)
                    setHasReportImageError(true)
                    setUploadReportImageLoading(false)
                }
            )
    }
    const handleDeleteFile = async () => {
        setDeleteLoading(true)
        await api.delete(`file/${fileId}`)
        setFileId("");
        setIsUpload(false);
        setDeleteLoading(false);
    }
    const handleDeleteReportFile = async () => {
        setDeleteReportImageLoading(true)
        await api.delete(`file/${reportFileId}`)
        setReportFileId("");
        setIsReportImageUpload(false);
        setDeleteReportImageLoading(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleAddReport = async () => {
        await api.post("report", {
            ...newReport,
            profileId: reportFileId,
        })
        setOpen(false);
        setReport(report => [...report, newReport])
        setNewReport({
            title: '',
            description: '',
            date: '',
            projectId: id,
            profileId: ''
        })
    }
    /*Editor SetUp*/
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            /*setProjectContent(editorRef.current.getContent())*/
        }
    };

    /*File Upload SetUp*/

    const handleEditProject = () => {
        const convertedProject = (startDateChanged && endDateChanged) ? {
            title: project.title,
            description: project.description,
            status: project.status,
            expectedBudge: project.expectedBudge,
            startDate: project.startDate,
            endDate: project.endDate,
            priority: project.priority,
            profileId: fileId
        } : (startDateChanged && !endDateChanged) ? {
            title: project.title,
            description: project.description,
            status: project.status,
            expectedBudge: project.expectedBudge,
            startDate: project.startDate,
            priority: project.priority,
            profileId: fileId
        } : (!startDateChanged && endDateChanged) ? {
            title: project.title,
            description: project.description,
            status: project.status,
            expectedBudge: project.expectedBudge,
            endDate: project.endDate,
            priority: project.priority,
            profileId: fileId
        } : {
            title: project.title,
            description: project.description,
            status: project.status,
            expectedBudge: project.expectedBudge,
            priority: project.priority,
            profileId: fileId
        }
        api.put(`project/${id}`, convertedProject).then(() => navigate(`/admin/crowd-funding`))
    }

    return (
        <>
            <div className="d-flex flex-column px-3">
                <div className="new-project">
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div className="d-flex flex-wrap">
                                <div className="edit-project-title">ویرایش پروژه</div>
                                <div className="col-12 my-2 px-2">
                                    <label htmlFor="project-title" className="font-bold pr-1">عنوان پروژه</label>
                                    <input id="product-title" type="text" tabIndex="1" placeholder=""
                                           className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           autoFocus=""
                                           value={project.title}
                                           onChange={(e) => setProject(existingValues => ({
                                               ...existingValues,
                                               title: e.target.value
                                           }))}
                                    />
                                </div>
                                {/*project description*/}
                                <Editor
                                    apiKey='your-api-key'
                                    init={{
                                        height: 500,
                                        language: 'fa',
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:dana,Arial,sans-serif; font-size:16px }'
                                    }}
                                    onChange={log}
                                    onInit={(evt, editor) => {
                                        setText(editor.getContent({format: 'text'}));
                                    }}
                                    value={project.description}
                                    onEditorChange={(newValue, editor) => {
                                        setProject(existingValues => ({
                                            ...existingValues,
                                            description: newValue
                                        }))
                                        setText(editor.getContent({format: 'text'}));
                                    }}
                                />
                                {/*project priority*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-category" className="font-bold pr-1">اولویت</label>
                                    <select id="product-category" type="text" tabIndex="2"
                                            className="form-select appearance-none w-full rounded-md py-1.5 px-2 border bg-white border-input text-sm leading-6"
                                            value={project.priority}
                                            onChange={(e) => setProject((existingValues) => ({
                                                ...existingValues,
                                                priority: e.target.value
                                            }))}
                                    >
                                        <option value="low">کم</option>
                                        <option value="medium">متوسط</option>
                                        <option value="high">ضروری</option>
                                    </select>
                                </div>
                                {/*project expected budge*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="project-price">مبلغ مورد نیاز</label>
                                    <input id="project-price" type="text" tabIndex="15" placeholder=""
                                           className="bg-white border border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           value={project.expectedBudge}
                                           onChange={(e) => setProject(existingValue => ({
                                               ...existingValue,
                                               expectedBudge: e.target.value
                                           }))}
                                    />
                                </div>
                                {/*project start date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ شروع پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={project.startDate}
                                                onChange={(date) => handleSetStartDate(new Date(date))}
                                    />
                                </div>
                                {/*project end date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ اتمام پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={project.endDate}
                                                onChange={(date) => handleSetEndDate(new Date(date))}
                                    />
                                </div>
                                {/*project status*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-category" className="font-bold pr-1">وضعیت</label>
                                    <select id="product-category" type="text" tabIndex="2"
                                            className="form-select appearance-none w-full rounded-md py-1.5 px-2 border bg-white border-input text-sm leading-6"
                                            value={project.status}
                                            onChange={(e) => setProject((existingValues) => ({
                                                ...existingValues,
                                                status: e.target.value
                                            }))}
                                    >
                                        <option value="preparingBudge">در حال تامین بودجه</option>
                                        <option value="doing">در حال انجام</option>
                                        <option value="complete">انجام شده</option>
                                    </select>
                                </div>
                                {/*project upload file*/}
                                <div className="col-12 my-2 px-2">
                                    <label>آپلود تصاویر</label>
                                    <div className="col-6">
                                        <input className="form-control form-control " id="formFileLg" type="file"
                                               onChange={(e) => {
                                                   handleInputFile(e)
                                               }}/>
                                    </div>
                                    <div className="col-6">
                                        {isUpload && !hasError ? (
                                            <div className="file-container" style={{marginTop: '-2px'}}>
                                                <button disabled={deleteLoading} className="deleteBtn"
                                                        onClick={handleDeleteFile}><MdDelete
                                                    fontSize="25px"/></button>
                                                <div className="d-flex align-items-center">
                                                    <h6 className="mx-1">{fileName}</h6>
                                                    <RiFileUploadFill/>
                                                </div>
                                            </div>
                                        ) : (uploadLoading ? (
                                                <div className="d-flex align-item-start">
                                                    <button className="uploadBtn" onClick={handleUpload}
                                                            disabled={uploadLoading}><MdCloudUpload fontSize="35px"/>
                                                    </button>
                                                    <ReactLoading type="cylon" color="#bdc3c7" className="submitLoading"
                                                                  height={1}
                                                                  width={45}/>
                                                </div>
                                            ) : (
                                                <button className="uploadBtn" onClick={handleUpload}
                                                        disabled={uploadLoading}><MdCloudUpload fontSize="35px"/>
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        {
                                            isUpload && (
                                                (hasError) ? (
                                                    <Alert variant='danger' className="mt-3">
                                                        فایل آپلود نشد
                                                    </Alert>
                                                ) : (
                                                    <Alert variant='success' className="mt-3">
                                                        فایل با موفقیت آپلود شد
                                                    </Alert>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="col-12 my-2 px-2 report-box">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <label className='me-2'>گزارشات</label>
                                            <Button className='mt-3 button-edit' onClick={handleClickOpen}>ثبت
                                                گزارش</Button>
                                            <Dialog open={open} onClose={handleClose}>
                                                <DialogTitle>ثبت گزارش</DialogTitle>
                                                <DialogContent>
                                                    <div className="d-flex flex-column">
                                                        <div className="col-12 mb-2">
                                                            <label htmlFor="report-title" className="font-bold pr-1">عنوان
                                                                گزارش</label>
                                                            <input type="text" tabIndex="1" placeholder="عنوان گزارش"
                                                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                                                   autoFocus=""
                                                                   onChange={(e) => setNewReport(existingValues => ({
                                                                       ...existingValues,
                                                                       title: e.target.value
                                                                   }))}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            <label htmlFor="report-title" className="font-bold pr-1">توضیحات
                                                                گزارش</label>
                                                            <input type="text" tabIndex="1" placeholder="توضیحات گزارش"
                                                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                                                   autoFocus=""
                                                                   onChange={(e) => setNewReport(existingValues => ({
                                                                       ...existingValues,
                                                                       description: e.target.value
                                                                   }))}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            <label htmlFor="product-price-seller">تاریخ</label>
                                                            <DatePicker calendarStyles={calendarStyles}
                                                                        style={{zIndex: 10}}
                                                                        onChange={(date) => handleSetReportDate(new Date(date))}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            <label>آپلود تصاویر</label>
                                                            <div className="col-6">
                                                                <input className="form-control form-control "
                                                                       id="formFileLg" type="file"
                                                                       onChange={(e) => {
                                                                           handleReportInputFile(e)
                                                                       }}/>
                                                            </div>
                                                            <div className="col-6">
                                                                {isReportImageUpload && !hasReportImageError ? (
                                                                    <div className="file-container"
                                                                         style={{marginTop: '-2px'}}>
                                                                        <button disabled={deleteReportImageLoading}
                                                                                className="deleteBtn"
                                                                                onClick={handleDeleteReportFile}>
                                                                            <MdDelete
                                                                                fontSize="25px"/></button>
                                                                        <div className="d-flex align-items-center">
                                                                            <h6 className="mx-1">{reportImageFileName}</h6>
                                                                            <RiFileUploadFill/>
                                                                        </div>
                                                                    </div>
                                                                ) : (uploadReportImageLoading ? (
                                                                        <div className="d-flex align-item-start">
                                                                            <button className="uploadBtn"
                                                                                    onClick={handleReportImageUpload}
                                                                                    disabled={uploadReportImageLoading}>
                                                                                <MdCloudUpload fontSize="35px"/>
                                                                            </button>
                                                                            <ReactLoading type="cylon" color="#bdc3c7"
                                                                                          className="submitLoading"
                                                                                          height={1}
                                                                                          width={45}/>
                                                                        </div>
                                                                    ) : (
                                                                        <button className="uploadBtn"
                                                                                onClick={handleReportImageUpload}
                                                                                disabled={uploadReportImageLoading}>
                                                                            <MdCloudUpload fontSize="35px"/>
                                                                        </button>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div>
                                                                {
                                                                    isReportImageUpload && (
                                                                        (hasReportImageError) ? (
                                                                            <Alert variant='danger' className="mt-3">
                                                                                فایل آپلود نشد
                                                                            </Alert>
                                                                        ) : (
                                                                            <Alert variant='success' className="mt-3">
                                                                                فایل با موفقیت آپلود شد
                                                                            </Alert>
                                                                        )
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                                <DialogActions>
                                                    <button
                                                        onClick={handleAddReport}
                                                        className='done-button MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1e6y48t-MuiButtonBase-root-MuiButton-root'>
                                                        ثبت گزارش
                                                    </button>
                                                    <Button className='close-button' onClick={handleClose}>بستن</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                        {
                                            report.map((r, i) => (
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon/>}
                                                        aria-controls="panel1a-content"
                                                    >
                                                        <Typography>{r.title}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>{r.description}</Typography>
                                                        <img className='report-box-image' src={profileList[i]}/>
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/*project release*/}
                            <Button className='mt-3 button-edit' onClick={handleEditProject}>انتشار</Button>
                            {/*<button onClick={uploadFiles}>Upload</button>*/}


                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </div>

        </>
    );
}

