import React, { useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Button from '@mui/material/Button';
import "../../../style/dashboard/account.css"


const theme = createTheme({
    direction: 'rtl'
});
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function UserAccount() {
    const [name, setName] = useState('سروش');
    const [family, setFamily] = useState('هیپاپولوژیست');
    const [phoneNumber, setPhoneNumber] = useState('09129996996');

    const editAccount = () => {
        console.log(
            {
                name: name,
                family : family,
                num : phoneNumber
            }
        )
    }
    const getName = e => {setName(e.target.value)}
    const getFamily = e => {setFamily(e.target.value)}
    const getPhoneNumber = e => {setPhoneNumber(e.target.value)}

    return (
        <>
            <div className="account-box">
                <div className="title-box">اطلاعات حساب کاربری</div>
                <div className="mt-4 account-box-content">


                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div className="d-flex flex-wrap">
                                <div className="col-md-4 col-12">
                                    <TextField
                                        required
                                        id="name"
                                        label="نام"
                                        defaultValue={name}
                                        onChange={getName}
                                    />
                                </div>
                                <div className="col-md-4 col-12">
                                    <TextField
                                        required
                                        id="family"
                                        label="نام خانوادگی"
                                        defaultValue={family}
                                        onChange={getFamily}
                                    />
                                </div>
                                <div className="col-md-4 col-12">
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        label="شماره موبایل"
                                        defaultValue={phoneNumber}
                                        onChange={getPhoneNumber}
                                    />
                                </div>
                            </div>
                            <Button className='mt-3 button-edit' onClick={editAccount}>ویرایش</Button>
                        </ThemeProvider>
                    </CacheProvider>



                </div>
            </div>
        </>
    );
}
export default UserAccount