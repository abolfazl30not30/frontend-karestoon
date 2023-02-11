import React, {useState,useEffect} from 'react';
import "../../../style/dashboard/account.css"
import profileImage from './../../../assets/img/author-thumbs/09.png'

function UserAccount() {
    const [user,updateUser] = useState({
        phoneNumber : '09335137958',
        name : 'میلاد',
        family : 'زارع' ,
        password: '6996'
    })


    const handleEditAccount = () => {
        console.log(user)
    }

    return (
        <>
            <div className="account-box">
                <div className="title-box">اطلاعات حساب کاربری</div>
                <div className="mt-4 account-box-content">
                    <div className="d-flex flex-row flex-wrap">
                        {/*Phone Number Input*/}
                        <div className="col-md-6 col-12 my-2 px-2">
                            <label htmlFor="project-title" className="font-bold pr-1">
                                شماره موبایل
                            </label>
                            <input value={user.phoneNumber} disabled='true' type="text" tabIndex="1" placeholder="شماره موبایل"
                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                            />
                        </div>
                        {/*Name Input*/}
                        <div className="col-md-6 col-12 my-2 px-2">
                            <label className="font-bold pr-1">
                                نام
                            </label>
                            <input
                                value={user.name}
                                onChange={(e) => updateUser(existingValues => ({
                                    ...existingValues,
                                    name: e.target.value
                                }))}
                                type="text" tabIndex="1" placeholder="نام"
                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                            />
                        </div>
                        {/*Family Input*/}
                        <div className="col-md-6 col-12 my-2 px-2">
                            <label className="font-bold pr-1">
                                نام خانوادگی
                            </label>
                            <input
                                value={user.family}
                                onChange={(e) => updateUser(existingValues => ({
                                    ...existingValues,
                                    family: e.target.value
                                }))}
                                type="text" tabIndex="1" placeholder="نام خانوادگی"
                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                            />
                        </div>
                        {/*Password Number Input*/}
                        <div className="col-md-6 col-12 my-2 px-2">
                            <label className="font-bold pr-1">
                                رمز عبور
                            </label>
                            <input
                                value={user.password}
                                onChange={(e) => updateUser(existingValues => ({
                                    ...existingValues,
                                    password: e.target.value
                                }))}
                                type="password" tabIndex="1" placeholder="رمز عبور"
                                   className="bg-white border-2 border-input rounded-md py-1.5 px-2 text-sm leading-6"
                            />
                        </div>
                        {/*Image file Input*/}
                        {/*<div className="col-md-6 col-12 my-2 px-2">
                            <div className="d-flex flex-column">
                                <div className="profile-image-box">
                                    <img src={profileImage}/>
                                </div>
                                <label className="custom-file-upload" id='upload_profile_image'>
                                    <input
                                        type="file"
                                        style={{display:'none'}}
                                        onChange={(e) => console.log(e.target.files)}
                                    />
                                    تغیر تصویر پروفایل
                                </label>
                            </div>
                        </div>*/}
                        {/*Edit Account*/}
                        <div className="col-12 my-2 px-2">
                           <button className='edit-account-button' onClick={handleEditAccount}>ویرایش حساب کاربری</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserAccount;