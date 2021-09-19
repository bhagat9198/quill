import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function QuillEditor(props) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <div className="text-editor">
      <ReactQuill
        value={text}
        onChange={(val) => handleChange(val)}
      />
    </div>
  );
}
