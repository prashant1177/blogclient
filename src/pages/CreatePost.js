import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";  // Import your context

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
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

export default function CreatePost() {
  const { userInfo } = useContext(UserContext); 
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("cover", cover);
   // Debugging: Log FormData content
  for (let [key, value] of data.entries()) {
    console.log(`${key}:`, value);
  }
  if (!userInfo || !userInfo.token) {
    console.error("No token found! User must be logged in.");
    return;
  }

  const response = await fetch("https://blogserver-two.vercel.app/post", {
    method: "POST",
    body: data,
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${userInfo.token}`, // Get token from context
    },
  });
    console.log(response);
    if (response) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={"title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input
          type="text"
          placeholder={"Enter image link"}
          value={cover}
          onChange={(ev) => setCover(ev.target.value)}
        />
        
        <ReactQuill
          value={content}
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
          formats={formats}
        />
        <button>Create Post</button>
      </form>
    </div>
  );
}
