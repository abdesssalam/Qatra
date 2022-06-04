import { createContext,useState,useEffect } from "react";
import axios_api from "../js/CONF_AXIOS";
//export const UserContext=createContext(null)
export const UserContext=createContext({
  user:{
    //   nom:'',
    //   prenom:'',
    //   email:'',
    //   role:0,
    //   token:'',
    //   isAuth:false
  },
  setUser:()=>{}      
})

export const UserProvider=({children})=>{
    const [user,setUser]=useState({});
    useEffect(()=>{
      axios_api.get('user')
        .then(res=>{
          console.log(res.data)
          if(res.status==200){
            console.log('user context 200')
            setUser(res.data)
            
          }else if(res.status==401){
            setUser({})
          }
        })
    },[])
    const contexValue={
       user,setUser
    };
    console.log('from conext',contexValue)
    return (
        <UserContext.Provider value={contexValue}>
            {children}
        </UserContext.Provider>
    )
}

