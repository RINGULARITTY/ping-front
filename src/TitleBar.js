import "./styles/TitleBar.css"

export default function TitleBar({version}) {
    return (
        <div className="titleBar">
            VSCODE++ v{version}
        </div>
    )
}