import { useEffect, useState } from "react";
import Post from "../Post";
import HeroHome from "../components/HeroHome";
import FavBooks from "../components/FavBooks";
import People from "../components/People";
import About from "../components/About";

export default function IndexPage() {
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
      {posts.length > 0 && (
        <>
          <div className="heroGridContainer">
            <div className="leftGrid">
              {posts.slice(1, 5).map((post) => (
                <HeroHome {...post} />
              ))}
            </div>
            <div className="recent">
              {posts.slice(0, 1).map((post) => (
                <HeroHome {...post} />
              ))}
            </div>
          </div>
        </>
      )}
      <div id="teachers">
      <People /></div>
      {/* Fav Books */}
      <h1 className="head">BLOG POSTS</h1>
      <div className="allPostGrid">
      {posts.length > 5 && posts.slice(5, 9).map((post) => <Post {...post} />)}</div>

      <h1  className="head">FAVORITE BOOKS</h1>
      <FavBooks />
      <h1 className="head">ABOUT</h1>
      <About/>
    </>
  );
}
