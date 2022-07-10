import "./styles/File.css"

export default function File({fileName}) {
    return (
        <div
        className={`file ${fileName.includes(".js") ? "js": ""}`}
        onContextMenu={(e) => {
            e.preventDefault();
        }}
        >
            {fileName}
        </div>
    )
}