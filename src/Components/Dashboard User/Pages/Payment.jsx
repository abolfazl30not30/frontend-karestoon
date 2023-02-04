import React,{useState} from 'react';
import "../../../style/dashboard/payment.css"

function ProjectUser() {
    const [donations,setDonations] = useState([
        {
            name : 'برای میلاد',
            amount : '69000000',
            date : '1401/05/06',
            hour : '04:00'
        },
        {
            name : 'برای میلاد',
            amount : '69000000',
            date : '1401/05/06',
            hour : '04:00'
        },
        {
            name : 'برای میلاد',
            amount : '69000000',
            date : '1401/05/06',
            hour : '04:00'
        },
        {
            name : 'برای میلاد',
            amount : '69000000',
            date : '1401/05/06',
            hour : '04:00'
        }
    ])

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
                                    <td>{d.name}</td>
                                    <td>{d.amount}</td>
                                    <td>{d.date}</td>
                                    <td>{d.hour}</td>
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