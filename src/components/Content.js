import { useContext, useEffect } from "react"
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import { useNavigate } from "react-router-dom"
// import { useRef } from "react";
import { useLocation } from 'react-router-dom';
// import { useContext } from "react";
export default function Content() {
    const { loading, setLoading, posts,fetchData } = useContext(AppContext);
    const location = useLocation();
    //0-->category
    //1-->tag
    //2-->render normally
    // const useEffectToBeCalled = useRef(0);
    const category = location.pathname.split("/").at(-1);
    const tag = location.pathname.split("/").at(-1);
    useEffect(()=>{
        if(location.pathname.includes('categories')){
            fetchData(1,null,category,null);
        }
        else if(location.pathname.includes('tag')){
            fetchData(1,tag,null,null);
        }
        else{
            fetchData(1);
        }
       },[location.pathname])
    const navigator = useNavigate();
    return (
        <div className="flex flex-col w-1/2 mx-auto gap-8 py-[8rem] z-1">
            {
                (loading) ? (<Spinner></Spinner>) : (
                    posts.map((ele, index) => {
                        return <Card key={index} props={ele}></Card>
                    }))
            }
        </div>
    )
}