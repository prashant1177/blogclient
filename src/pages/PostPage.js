import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../Post";
import HeroHome from "../components/HeroHome";
import RecentPosts from "../components/RecentPosts";

export default function PostPage({}) {
  const { id } = useParams();
  const [posts, setPost] = useState([]);

  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`https://blogserver-two.vercel.app/post/${id}`).then((response) => {
      response.json().then((Info) => {
        setPostInfo(Info);
        console.log(Info);
      });
    });
  }, []);
  useEffect(() => {
    fetch("https://blogserver-two.vercel.app/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);
  if (!postInfo) return "";

  return (
    <div className="PostPageGrid">
      <div className="leftPost">
        <h1>{postInfo.title}</h1>
        <div className="postImage">
          <img src={`${postInfo.cover}`} alt="Thumbnail of post" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
          className="postContent"
        ></div>
        <hr />
        <div className="postInfo">
          <p>{postInfo.summary}</p>
          <p className="info">
            <a href="/" className="author">
              ~ {postInfo.author.username} ~
            </a>
            <time>
              {format(new Date(postInfo.createdAt), "yyyy-MM-dd")} ~{" "}
              <Link to={`/edit/${postInfo._id}`}>Edit this post</Link>
            </time>
          </p>{" "}
        </div>
      </div>
      <div className="rightPost">
        <h1>Recent Posts</h1>
        {posts.length > 5 &&
          posts.slice(0, 5).map((post) => <RecentPosts {...post} />)}
      </div>
    </div>
  );
}
