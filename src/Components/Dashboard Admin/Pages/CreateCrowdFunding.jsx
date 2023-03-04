import React,{useState} from "react";
import { useRef } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { DatePicker } from 'react-persian-datepicker';
import FileUpload from "react-mui-fileuploader"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Button from '@mui/material/Button';

import "../../../style/dashboard/Admin/createCrowdFounding.css"
import api from "../../../api/api";
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {RiFileUploadFill} from "react-icons/ri";
import ReactLoading from "react-loading";
import Alert from "react-bootstrap/Alert";

const theme = createTheme({
    direction: 'rtl'
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const calendarStyles= {
    calendarContainer: 'calendarContainer',
    dayPickerContainer: 'dayPickerContainer',
    monthsList: 'monthsList',
    daysOfWeek: 'daysOfWeek',
    dayWrapper: 'dayWrapper',
    selected: 'selected',
    heading: 'heading',
    next:'next',
    prev:'prev',
    title:'title',
}


export default function CreateCrowdFunding() {
    const [projectTitle,setProjectTitle] = useState('')
    const [projectContent,setProjectContent] = useState('')
    const [projectType,setProjectType] = useState('low')
    const [projectPrice,setProjectPrice] = useState('')
    const [projectStartDate,setProjectStartDate] = useState("")
    const [projectEndDate,setProjectEndDate] = useState("")

    const [fileId, setFileId] = useState("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isUpload, setIsUpload] = useState(false);
    const [uploadFile, setUploadFile] = useState([]);
    const [fileName, setFileName] = useState("");
    const [description, setDescription] = useState("");
    const [text, setText] = useState('');
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            setProjectContent(editorRef.current.getContent())
        }
    };

    const handleReleaseProject = async () => {
        const newProject = {
            title: projectTitle,
            description: description,
            status: "preparingBudge",
            expectedBudge: parseInt(projectPrice),
            prepareBudge: 0,
            startDate: projectStartDate,
            endDate: projectEndDate,
            priority: projectType,
            profileId: fileId
        }
        await api.post("project", newProject)
    }
    const handleInputFile = async (event) => {
        setUploadFile(event.target.files)
        setFileName(event.target.files[0].name)
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
    const handleDeleteFile = async () => {
        setDeleteLoading(true)
        await api.delete(`file/${fileId}`)
        setFileId("");
        setIsUpload(false);
        setDeleteLoading(false);
    }

    const handleSetStartDate = (date) => {
        const convertedDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString()
        setProjectStartDate(convertedDate)
    }
    const handleSetEndDate = (date) => {
        const convertedDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString()
        setProjectEndDate(convertedDate)
    }

    return (
        <>
            <div className="d-flex flex-column px-3">
                <div className="new-project">
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div className="d-flex flex-wrap">
                                {/*project title*/}
                                <div className="col-12 my-2 px-2">
                                    <label htmlFor="project-title" className="font-bold pr-1">عنوان پروژه</label>
                                    <input id="product-title" type="text" tabIndex="1" placeholder="عنوان پروژه"
                                           className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           autoFocus=""
                                           value={projectTitle}
                                           onChange={(e) => setProjectTitle(e.target.value)}
                                    />
                                </div>
                                {/*project content*/}
                                <Editor
                                    apiKey='your-api-key'
                                    onInit={(evt, editor) => editorRef.current = editor}
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
                                    value={description}
                                    onEditorChange={(newValue, editor) => {
                                        setDescription(newValue)
                                        setText(editor.getContent({format: 'text'}));
                                    }}
                                />
                                {/*project type*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-category" className="font-bold pr-1">انتخاب اولویت</label>

                                    <select id="product-category" type="text" tabIndex="2"
                                            className="form-select appearance-none w-full rounded-md py-1.5 px-2 border bg-white border-input text-sm leading-6"
                                            onChange={(e) => setProjectType(e.target.value)}
                                            value={projectType}
                                    >
                                        <option value="low">کم</option>
                                        <option value="medium">متوسط</option>
                                        <option value="high">ضروری</option>
                                    </select>
                                </div>
                                {/*project price*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="project-price">مبلغ مورد نیاز</label>
                                    <input id="project-price" type="text" tabIndex="15" placeholder=""
                                           className="bg-white border border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           value={projectPrice}
                                           onChange={(e) => setProjectPrice(e.target.value)}/>
                                </div>
                                {/*project start date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ شروع پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={projectStartDate} onChange={(date) => handleSetStartDate(new Date(date))}
                                    />
                                </div>
                                {/*project end date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ اتمام پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={projectEndDate} onChange={(date) => handleSetEndDate(new Date(date))}
                                    />
                                </div>
                                {/*project uplode file*/}
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

                                {/*<div className="col-md-6 col-12 my-2 px-2">*/}
                                {/*    <label>آپلود تصاویر</label>*/}
                                {/*    <FileUpload*/}
                                {/*        multiFile={false}*/}
                                {/*        title = ''*/}
                                {/*        header = ' کشیدن و رها کردن'*/}
                                {/*        buttonLabel = 'اینجا کلیک کنید'*/}
                                {/*        leftLabel= 'یا'*/}
                                {/*        rightLabel = 'برای انتخاب فایل ها'*/}
                                {/*        onFilesChange={handleFilesChange}*/}
                                {/*        onContextReady={(context) => {}}*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>
                            {/*project release*/}
                            <Button className='mt-3 button-edit' onClick={handleReleaseProject}>انتشار</Button>
                            {/*<button onClick={uploadFiles}>Upload</button>*/}


                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </div>

        </>
    );
}






/*function CreateCrowdFunding() {
    return (
        <>
            <div className="box">
                <div className="box-title">ساخت تامین مالی جمعی</div>
                <div className="box-content">







                </div>
            </div>
        </>
    )
}
export default CreateCrowdFunding*/
