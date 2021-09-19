import React, { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePostContext } from "../context";

export default function Editor2(props) {
  const usePost = usePostContext()
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ size: [ 'small', false, 'large', 'huge' ]}]
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      [{ script: "sub" }, { script: "super" }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [text, setText] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    // console.log(ReactQuill);
    // console.log(editorRef.current.editingArea);
    editorRef.current.editingArea.style.height = "500px";
  }, []);

  const handleChange = (val) => {
    setText(val);
  };

  console.log(usePost.posts);
  console.log(usePost.addPost);
  const save = () => {
    console.log('hey');
    console.log(text);
    // console.log(ReactQuill.getContents());
    usePost.addPost([text])
  }

  return (
    <div>
      <ReactQuill
        ref={editorRef}
        modules={modules}
        formats={formats}
        value={text}
        onChange={(val) => handleChange(val)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}
