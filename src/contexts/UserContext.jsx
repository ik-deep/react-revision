import React,{createContext,useState} from 'react'


export const UserContext = createContext();

export default function UserProvider({children}){

    const [user,setUser] = useState(null);
    
    const login = () =>{
        setTimeout(()=>{
            setUser({name:"irfan"})
        })
    }

    const logout=()=>{
    setUser(null)
    }



    return <UserContext.Provider value={
        {
            user,
            logout,login
        }
    }> 
    {children}
    </UserContext.Provider>
}