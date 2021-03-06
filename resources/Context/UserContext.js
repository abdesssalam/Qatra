import { createContext,useContext,useState,useEffect } from "react";
import axios_api from "../js/CONF_AXIOS";
export const UserContext=createContext({
  user:{},
  setUser:()=>{}      
})

export const UserProvider=({children})=>{
    const [user,setUser]=useState({});
    
    useEffect(()=>{
      ()=>{
      axios_api.get('user')
        .then(res=>{
          if(res.status==200){
            let data=res.data
            data={...data,...{isAuth:true}}
            setUser(data)
            
            
          }else if(res.status==401){
            setUser({})
          }
        })
      } 
    },[])
    const contexValue={
       user,setUser
    };
   
    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth=()=>{
  return useContext(UserContext);
}