import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostPage({}) {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`https://blogserver-two.vercel.app/post/${id}`).then((response) => {
      response.json().then((Info) => {
        setPostInfo(Info);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div>
      <div>
        <Link to={`/edit/${postInfo._id}`}>
          Edit this post
        </Link>
        </div>

      <h1>{postInfo.title}</h1> <hr />
      <p>{postInfo.summary}</p>
      <p className="info">
        <a href="/" className="author">
          ~ {postInfo.author.username}
        </a>
        <time>{format(new Date(postInfo.createdAt), "yyyy-MM-dd")}</time>
      </p>
      <div className="postImage">
        <img
          src={`https://blogserver-two.vercel.app/${postInfo.cover}`}
          alt="Thumbnail of post"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}
