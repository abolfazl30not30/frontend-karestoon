import React, {useEffect, useState} from 'react';
import "../../../style/dashboard/payment.css"
import api from "../../../api/api";

function ProjectUser() {
    useEffect(() => {
        if (localStorage.getItem('role') !== "USER") {
            localStorage.clear()
            props.history.push("/sign-in")
        }
    }, [props.history]);

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        // const navigate = useNavigate();
        if (localStorage.getItem('role') !== "USER") {
            localStorage.clear()
            window.location = ("/sign-in")
        }
        setConstructorHasRun(true);
    };
    constructor()
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