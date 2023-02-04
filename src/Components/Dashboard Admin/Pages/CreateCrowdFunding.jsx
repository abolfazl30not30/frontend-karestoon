import React,{useState} from "react";
import { useRef } from "react"
import { Editor } from '@tinymce/tinymce-react';
import { Calendar, DatePicker } from 'react-persian-datepicker';
import FileUpload from "react-mui-fileuploader"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';

import "../../../style/dashboard/Admin/createCrowdFounding.css"

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
    const [projectType,setProjectType] = useState('')
    const [projectPrice,setProjectPrice] = useState('')
    const [projectStartDate,setProjectStartDate] = useState(new Date())
    const [projectEndDate,setProjectEndDate] = useState(new Date())
    const [projectImage,setProjectImage] = useState('')



    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            setProjectContent(editorRef.current.getContent())
        }
    };


    const [filesToUpload, setFilesToUpload] = useState([])
    const handleFilesChange = (files) => {
        // Update chosen files
        setFilesToUpload([ ...files ])
    };
    const uploadFiles = () => {
        // Create a form and post it to server
        let formData = new FormData()
        filesToUpload.forEach((file) => formData.append("files", file))

        console.log(formData)

        /*fetch("/file/upload", {
            method: "POST",
            body: formData
        })*/
    }

    const handleReleaseProject = () => {
        console.log('relese')
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
                                    <input id="product-title" type="text" tabIndex="1" placeholder="پروژه شماره یک"
                                           className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           autoFocus=""
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
                                />
                                {/*project type*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-category" className="font-bold pr-1">انتخاب نوع</label>

                                    <select id="product-category" type="text" tabIndex="2"
                                            className="form-select appearance-none w-full rounded-md py-1.5 px-2 border bg-white border-input text-sm leading-6"
                                            onChange={(e) => setProjectType(e.target.value)}
                                    >
                                        <option value="necessary">ضروری</option>
                                        <option value="medium">متوسط</option>
                                        <option value="normal">عادی</option>
                                    </select>
                                </div>
                                {/*project price*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="project-price">مبلغ مورد نیاز</label>
                                    <input id="project-price" type="text" tabIndex="15" placeholder="۲۹۵,۰۰۰"
                                           className="bg-white border border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                           onChange={(e) => setProjectPrice(e.target.value)}/>
                                </div>
                                {/*project start date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ شروع پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={projectStartDate} onChange={(date) => setProjectStartDate(date)}
                                    />
                                </div>
                                {/*project end date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ اتمام پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={projectEndDate} onChange={(date) => setProjectEndDate(date)}
                                    />
                                </div>
                                {/*project uplode file*/}
                                <div className="col-md-6 col-12 my-2 px-2">
                                    <label>آپلود تصاویر</label>
                                    <FileUpload
                                        multiFile={true}
                                        title = ''
                                        header = ' کشیدن و رها کردن'
                                        buttonLabel = 'اینجا کلیک کنید'
                                        leftLabel= 'یا'
                                        rightLabel = 'برای انتخاب فایل ها'
                                        onFilesChange={handleFilesChange}
                                        onContextReady={(context) => {}}
                                    />
                                </div>
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
