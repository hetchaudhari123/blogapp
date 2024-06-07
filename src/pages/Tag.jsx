import Heading from "../components/Heading"
import Content from "../components/Content"
// import Tail from "./components/Tail"
import Tail from "../components/Tail";
// import './App.css'
import { Route,Routes } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useLocation } from 'react-router-dom';
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner";
import Card from "../components/Card";
export default function Tag() {
    const { loading, setLoading, posts,fetchData,setPosts } = useContext(AppContext);
    const location = useLocation();
    const blogId = location.pathname.split("/").at(-1);
    useEffect(()=>{
        if(location.pathname.includes("blog")){
            fetchData(1,null,null,blogId);
        }
       },[location.pathname])
    const navigator = useNavigate();
    return (
        <div className="flex flex-col w-1/2 mx-auto gap-8 py-[8rem] z-1">
            {
               
                (loading) ? (<Spinner></Spinner>) : (
                    <div>
                        <button className="border-2 border-slate-200 rounded-md px-4 py-1 mb-5" onClick={()=>{navigator(-1)}}>Back</button>
                        <Card key={0} props={posts[posts.length-1]}></Card>
                        <h2 className="font-bold text-[1.25rem] cursor-pointer mt-5 mb-5">Related Blogs</h2>
                        {posts.map((ele,index)=>{
                            if(index!=posts.length-1)
                            return <Card key={index} props={ele}></Card>
                        })}
                    </div>
                )
            }
            
        </div>
    )
}
