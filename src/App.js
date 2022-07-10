import CodeSection from "./CodeSection";
import ExecBar from "./ExecBar";

import { useState } from "react";
import TitleBar from "./TitleBar";
import Files from './Files'
import "./styles/App.css"

export default function App() {

  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("vs-dark");

  return (
    <div className="app">
      <TitleBar version={"1.0"}/>
      <ExecBar code={value} theme={theme} setTheme={setTheme}/>
      <Files />
      <CodeSection value={value} setValue={setValue} theme={theme}/>
    </div>
  );
}