import React from 'react';
import "../Pages/../../../style/payment.css"

function Payment() {

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
                        <tr>
                            <td>1</td>
                            <td>برای میلاد</td>
                            <td>500000000</td>
                            <td>1401/11.1</td>
                            <td>04:00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>برای میلاد</td>
                            <td>500000000</td>
                            <td>1401/11.1</td>
                            <td>04:00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>برای میلاد</td>
                            <td>500000000</td>
                            <td>1401/11.1</td>
                            <td>04:00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>برای میلاد</td>
                            <td>500000000</td>
                            <td>1401/11.1</td>
                            <td>04:00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>برای میلاد</td>
                            <td>500000000</td>
                            <td>1401/11.1</td>
                            <td>04:00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Payment