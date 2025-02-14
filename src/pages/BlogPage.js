import { useEffect, useState } from "react";
import Post from "../Post";
import HeroHome from "../components/HeroHome";
import FavBooks from "../components/FavBooks";
import People from "../components/People";
import About from "../components/About";

export default function BlogPage() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://blogserver-two.vercel.app/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);
  return (
    <>
      {/* <HeroHome /> */}

      {/* Fav Books */}
      <h1 className="head pageTitle">BLOG POSTS</h1>
      <div className="allPostGrid">
        {posts.length > 0 &&
          posts.map((post) => <Post {...post} />)}
      </div>

      <h1 className="head">ABOUT</h1>
      <About />
    </>
  );
}
