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
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Link} from "react-router-dom";

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
    const [project, setProject] = useState({
        title: 'برای میلاد',
        description: '<p>The quick brown fox jumps over the lazy dog</p>',
        status: 'تامین بودجه',
        expectedBudge: '1000000',
        prepareBudge: '',
        startDate: '1401/11/20',
        endDate: '1402/01/13',
        profileId: '',
        priority: 'necessary',
        file: ''
    })
    const [report,setReport] = useState([
        {
            title: 'جذب سرمایه',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            projectId: '',
            file: ''

        }
    ])
    const [newReport,setNewReport] = useState({
        title: '',
        description: '',
        projectId: '',
        file: ''
    })
    const [text, setText] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleAddReport = () => {
        setOpen(false);
        setReport(report => [...report,newReport])
        setNewReport({
            title: '',
            description: '',
            projectId: '',
            file: ''
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
        console.log(report)
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
                                    <input id="product-title" type="text" tabIndex="1" placeholder="پروژه شماره یک"
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
                                        <option value="عادی">عادی</option>
                                        <option value="بالا">بالا</option>
                                        <option value="ضروری">ضروری</option>
                                    </select>
                                </div>
                                {/*project expected budge*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="project-price">مبلغ مورد نیاز</label>
                                    <input id="project-price" type="text" tabIndex="15" placeholder="۲۹۵,۰۰۰"
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
                                                onChange={(date) => setProject(existingValue => ({
                                                    ...existingValue,
                                                    startDate: date
                                                }))}
                                    />
                                </div>
                                {/*project end date*/}
                                <div className="col-6 my-2 px-2">
                                    <label htmlFor="product-price-seller">تاریخ اتمام پروژه</label>
                                    <DatePicker calendarStyles={calendarStyles}
                                                selected={project.endDate}
                                                onChange={(date) => setProject(existingValue => ({
                                                    ...existingValue,
                                                    endDate: date
                                                }))}
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
                                        <option value="در حال تامین بودجه">آماده سازی</option>
                                        <option value="تامین بودجه">تامین بودجه</option>
                                        <option value="شروع پروژه">شروع پروژه</option>
                                        <option value="اتمام پروژه">اتمام پروژه</option>
                                    </select>
                                </div>
                                {/*project upload file*/}
                                <div className="col-12 my-2 px-2">
                                    <label>آپلود تصاویر</label>
                                </div>
                                <div className="col-12 my-2 px-2 report-box">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <label className='me-2'>گزارشات</label>
                                            <Button  className='mt-3 button-edit' onClick={handleClickOpen}>ثبت گزارش</Button>
                                            <Dialog open={open} onClose={handleClose}>
                                                <DialogTitle>ثبت گزارش</DialogTitle>
                                                <DialogContent>
                                                    <div className="d-flex flex-column">
                                                        <div className="col-12 mb-2">
                                                            <label htmlFor="report-title" className="font-bold pr-1">عنوان گزارش</label>
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
                                                            <label htmlFor="report-title" className="font-bold pr-1">توضیحات گزارش</label>
                                                            <input type="text" tabIndex="1" placeholder="توضیحات گزارش"
                                                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                                                                   autoFocus=""
                                                                   onChange={(e) => setNewReport(existingValues => ({
                                                                       ...existingValues,
                                                                       description: e.target.value
                                                                   }))}
                                                            />
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
                                            report.map((r) => (
                                                <Accordion>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                    >
                                                        <Typography>{r.title}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>{r.description}</Typography>
                                                        <img className='report-box-image' src={Image} />
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

