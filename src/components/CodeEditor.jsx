import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";

const COdeEditor = (props) => {
  // function onChange(newValue) {
  //   console.log("change", newValue);
  // }

  // Render editor
  return (
    <>
      <AceEditor
        // mode={props.language}
        theme={props.theme}
        language={props.language}
        // mode="java"
        // theme="twilight"
        // onChange={onChange}
        defaultValue="//Write, Edit and Run your java code using java Online Compiler"
        name="UNIQUE_ID_OF_DIV"
      />
    </>
  );
};



export default COdeEditor;