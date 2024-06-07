import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useEffect } from "react";
export const AppContext = createContext();
export function AppContextProvider({children}){
    const [loading,setLoading] = useState(true);
    const[posts,setPosts] = useState(null);
    const [page,setPage] = useState(1);
    const [tag,setTag] = useState(null);
    const [category,setCategory] = useState(null);
    const [totalPages,setTotalPages] = useState(0);
    const [blogId,setBlogId] = useState(null);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    async function fetchData(page=1,tag=null,category=null,blogId=null){
        let url = `${baseUrl}?page=${page}`;
        setLoading(true);
        if(blogId){
            url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            try{
                const response = await fetch(url);
                let obj = await response.json();
                obj.relatedBlogs.push(obj.blog);
                setPosts(obj.relatedBlogs);
                setTotalPages(obj.totalPages);
                setPage(page);
            }
            catch(err){
                console.log("Error obtained:" + err);
            }
            return;
        }
        else if(category){
            // url = `${newBaseUrl}get-blog?category=${category}`;
            url += `&category=${category}`;
        }
        else if(tag){
            url += `&tag=${tag}`;
        }
            try{
                const response = await fetch(url);
                let obj = await response.json();
                setPosts(obj.posts);
                // totalPages = obj.totalPages;
                setTotalPages(obj.totalPages);
                setPage(page);
            }
            catch(err){
                console.log("Error obtained:" + err);
            } 
            setLoading(false);

            
        // try{
        //     // console.log('hey there!');
        //     const response = await fetch(url);
        //     const obj = await response.json();
        //     setPosts(obj.posts);
        //     // totalPages = obj.totalPages;
        //     setTotalPages(obj.totalPages);
        //     // console.log(obj);
        //     setPage(page);
        //     setLoading(false);
        // }
        // catch(err){
        //     console.log("Error obtained:" + err);
        // }
    }
    // const value = {
    //     loading,
    //     setLoading,
    //     posts,
    //     setPosts,
    //     fetchData,
    //     totalPages,
    //     page,
    //     setPage,
    //     tag,
    //     category,
    //     blogId,
    //     setBlogId
    // }
    const value = {
        loading,setLoading,
    posts,setPosts,
    page,setPage,
    tag,setTag ,
    category,setCategory,
    totalPages,setTotalPages,
    blogId,setBlogId ,
    fetchData
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}