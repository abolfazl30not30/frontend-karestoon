import React, {useEffect, useState} from 'react';
import "../../../style/dashboard/payment.css"
import api from "../../../api/api";

function ProjectUser() {
    const [donations,setDonations] = useState([])
    useEffect(() => {
        const getDonations = async () => {
            const getDonationsResponse = await api.get(`payment/search?username=${localStorage.getItem("phoneNumber")}`)
            console.log(getDonationsResponse.data)
            setDonations(getDonationsResponse.data)
        }
        getDonations()
    }, []);

    return (
        <>
            <div className="payment-box">
                <div className="title-box">پرداخت ها</div>
                <div>
                    <table className='table-payment'>
                        <thead>
                            <tr>
                                <th>شماره</th>
                                <th>نام پروژه</th>
                                <th>مبلغ(ریال)</th>
                                <th>تاریخ</th>
                                <th>ساعت</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            donations.map((d,i) =>(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{d.projectName}</td>
                                    <td>{d.amount}</td>
                                    <td>{d.date.split(" ")[0]}</td>
                                    <td>{d.date.split(" ")[1]}</td>
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
export default ProjectUser