import React,{useState} from "react";
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

const theme = createTheme({
    direction: 'rtl'
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function CreateCrowdFunding() {
    return (
        <>
            <div className="box">
                <div className="box-title">ساخت تامین مالی جمعی</div>
                <div className="box-content">


                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div className="d-flex flex-wrap">
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="عنوان"
                                        // defaultValue={name}
                                        // onChange={getName}
                                        className='w-100'
                                    />
                                </div>
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <FormControl fullWidth>
                                        <InputLabel id="crowd-type-label">نوع</InputLabel>
                                        <Select
                                            labelId="crowd-type-label"
                                            id="crowd-type-select"
                                            // value={age}
                                            label="نوع"
                                            // onChange={handleChange}
                                        >
                                            <MenuItem value={10}>ضروری</MenuItem>
                                            <MenuItem value={20}>متوسط</MenuItem>
                                            <MenuItem value={30}>عادی</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="مبلغ مورد نیاز"
                                        // defaultValue={name}
                                        // onChange={getName}
                                        className='w-100'
                                    />
                                </div>
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="تاریخ شروع"
                                        // defaultValue={name}
                                        // onChange={getName}
                                        className='w-100'
                                    />
                                </div>
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="تاریخ اتمام"
                                        // defaultValue={name}
                                        // onChange={getName}
                                        className='w-100'
                                    />
                                </div>
                                {/*<div className="col-12 my-1 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="توضیحات"
                                        // defaultValue={name}
                                        // onChange={getName}
                                        className='w-100'
                                        style={{minHeight:'80px '}}
                                    />
                                </div>*/}



                                <div className="col-12 my-1 px-2">
                                    <span className='mb-2 fw-bold'>توضیحات</span>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        style={{borderRadius:'.5rem'}}
                                    />
                                </div>

                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="گزارشات"
                                        // defaultValue={name}
                                        // onChange={getName}
                                    />
                                </div>
                                <div className="col-md-3 col-12 my-2 px-2">
                                    <TextField
                                        required
                                        id="name"
                                        label="جمله انگیزشی"
                                        // defaultValue={name}
                                        // onChange={getName}
                                    />
                                </div>




                            </div>
                            <Button className='mt-3 button-edit'>ساختن</Button>
                        </ThemeProvider>
                    </CacheProvider>

                </div>
            </div>
        </>
    )
}
export default CreateCrowdFunding