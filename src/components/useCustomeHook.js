import { useEffect, useState } from "react";

function useCustomeHook(initial,name){
     const [title,setTitle] = useState(localStorage.getItem(name),initial);

useEffect(()=>{
   localStorage.setItem(name,title);
},[title])

     return [title,setTitle];
     
}


export default useCustomeHook;