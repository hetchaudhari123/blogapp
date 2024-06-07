import { useNavigate } from "react-router-dom"
export default function Card({props}){
    const navigate = useNavigate();
    if(props==undefined){
        console.log("Undefined");
        return (<div></div>)
    }
    // return (<div></div>)
    return (<div className="flex flex-col">
        <h2 className="font-bold text-[1.25rem] cursor-pointer" onClick={()=>{navigate(`/blog/${props.id}`)}}>{props.title}</h2>
        <p>By <span className="italic">{props.author}</span> on <span className="underline font-semibold cursor-pointer " onClick={()=>{navigate(`/categories/${props.category}`)}}>{props.category}</span></p>
        <p>Posted on <span>{props.date}</span></p>
        <p className="mt-4">{props.content}</p>
        <div className="flex gap-x-2">
            {
                props.tags.map((ele,index)=>{
                    return (
                        <span key={index} className="underline text-blue-600 font-semibold text-xs cursor-pointer" onClick={()=>{navigate(`/tag/${ele}`)}}>#{ele}</span>
                    )
                })
            }
        </div>
    </div>);
}