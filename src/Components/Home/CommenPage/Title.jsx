import React from 'react';
import {Link} from "react-router-dom"
function Title(props) {

    return (
        <>
            <section className="page-title-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8">
                            <h1 className="page-title">{props.name}</h1>
                        </div>
                        <div className="col-auto">
                            <ul className="page-breadcrumb">
                                <li><Link to="/">خانه</Link></li>
                                <li>{props.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Title