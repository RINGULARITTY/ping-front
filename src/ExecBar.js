import './styles/ExecBar.css'

import { useState } from "react";

export default function ExecBar({code, theme, setTheme}) {

    const [returnVal, setReturnVal] = useState("");
    const [isReturnError, setIsReturnError] = useState(false);

    async function runCode() {
        try {
            setReturnVal("Return with " + eval(code));
            setIsReturnError(false);
        } catch(e) {
            setReturnVal("Fail to execute : " + e);
            setIsReturnError(true);
        }
    }

    return (
        <div>
            <div className={`ThemeButton ${theme}`}
            onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}>
                {theme === "vs-dark" ? "DARK" : "LIGHT"}
            </div>
            <div className="ExecButton" onClick={runCode}>
                {"RUN"}
            </div>
            <div className={`ExecResult ${isReturnError ? "fail" : "success"}`}>
                {returnVal}
            </div>
        </div>
    )
}