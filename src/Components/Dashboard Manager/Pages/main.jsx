import React, {useEffect, useState} from "react";

function MainManagerPage(props) {
    useEffect(() => {
        if (localStorage.getItem('role') !== "MANAGER") {
            localStorage.clear()
            props.history.push("/sign-in")
        }
    }, [props.history]);

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        if (localStorage.getItem('role') !== "MANAGER") {
            localStorage.clear()
            window.location = ("/sign-in")
        }
        setConstructorHasRun(true);
    };
    constructor()
    return <>
        <h1>Manager</h1>
    </>
}

export default MainManagerPage