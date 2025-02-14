import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";


export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:3001/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;
 async function logout(){
  await fetch("http://localhost:3001/logout", {
      credentials: "include",
      method: 'POST'
    });
    setUserInfo(null);
  }
  return (
    <header>
      
      <div className="navigation"> <Link to="/" className="logo">
        <img src="./logo.png"/>
      </Link>
      <Link to="/" className="navbtn">
        Home
      </Link><Link to="/blog" className="navbtn">
        Blog
      </Link><Link to="/books" className="navbtn">
        Books
      </Link><Link to="/teachers" className="navbtn">
        Teachers
      </Link><Link to="/about" className="navbtn">
        About
      </Link>
        
        
     </div>
     <nav><Link to="https://www.linkedin.com/in/prashantjpatil49/" className="btn" target="_blank">Contact Me</Link></nav>
      <nav>
        {username && (
          <>
            <Link to="/create">New Post</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
