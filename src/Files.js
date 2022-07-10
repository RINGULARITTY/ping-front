import { useState } from "react";

import File from "./File";

import "./styles/Files.css"

export default function Files() {
    const [files, setFiles] = useState(["script.js", "truc.js", "kappa.issou", "mama.js"]);

    return (
        <div className="files">
            {files.map((f, i) => <File key={i} fileName={f}/>)}
        </div>
    );
}