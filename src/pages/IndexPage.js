import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage(){
    const [posts, setPost] = useState([]);
    useEffect(()=>{
       fetch('https://blogserver-two.vercel.app/post').then(response =>{
        response.json().then(posts =>{
            setPost(posts);
        });
       })
    }, [])
    return (
        <>
        {posts.length > 0 && posts.map(post =>(
<Post {...post}/>
        ))}
        </>
    )
}