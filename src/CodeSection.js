import './styles/CodeSection.css'

import Editor from "@monaco-editor/react";

export default function CodeSection({value, setValue, theme}) {

  const handleEditorChange = (value) => {
    setValue(value);
  };

  return (
    <plaintext className="codeContainer">
      <Editor
        height="85vh"
        width={`100%`}
        language={"javascript"}
        value={value}
        theme={theme}
        defaultValue=""
        onChange={handleEditorChange}
      />
    </plaintext>
  );
}