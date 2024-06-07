import { useContext } from "react"
import { AppContext } from "../context/AppContext";

export default function Tail(){
    const {page,setPage,totalPages,fetchData} = useContext(AppContext);
    function clickHandler(str){
        if(str == 'pre'){
            // setPage(page - 1);
            fetchData(page-1);
        }
        else{
            fetchData(page+1);
        }
    }
    return (
        <div className=" flex justify-center fixed w-full bottom-0 z-10 bg-white py-4">
            <div className="w-1/2 flex justify-between ">
            <div className="flex gap-4 ">

            {
                (page > 1) && (<button className="border-2 border-slate-200 rounded-md px-4 py-1" onClick={()=>{clickHandler('pre')}}>Previous</button>)
            }
            {
                (page < totalPages) && (<button className="border-2 border-slate-200 rounded-md px-4 py-1" onClick={()=>{clickHandler('next')}}>Next</button>)
            }
            </div>
            <div className="font-bold">
                Page {page} of {totalPages}
            </div>
            </div>
        </div>
    )
}