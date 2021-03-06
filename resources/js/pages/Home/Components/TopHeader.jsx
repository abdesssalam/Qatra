import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../Context/UserContext'
import axios_api from '../../../CONF_AXIOS';
function TopHeader() {
  const {user,setUser}=useContext(UserContext);
 
  let loginState={title:'Log in',link:'/login'}
  

  if(user != null && JSON.stringify(user) != '{}'){
      const link='/profile/'+user.id;
      
      loginState={ title:'profile',link:link}
      if(user.role==4 || user.role==5){
        loginState={ title:'dashboard',link:'/dashboard'}
      }
  }

  const navItems=[
    {
      
      title:'Accueil',
      link:'/'
    }
    ,
    {
      
      title:'Carnavals',
      link:'/carnaval'
    }
    ,
    loginState
   ]
    const nav=navItems.map((item,idx)=><Link to={item.link} key={idx} className='p-2    text-center text-white  rounded-md text-lg border-r border-gray-50 hover:text-gray-400 hover:border-gray-400'>{item.title}</Link>)
  //logout
  const logout=async ()=>{
    await axios_api.post('logout')
    .then(res=>{
      if(res.data.message=='Success'){
        console.log(res)
        setUser({})
      }
    })
  }
    return (
    <div className='flex justify-between w-11/12 mx-auto  items-center '>
            <div>
              <img src="/imgs/logo.png" alt="logo" className='w-24'  />
            </div>
            <div>
             <ul className='flex  cursor-pointer bg-primary rounded-lg px-0'>
                {nav}
                {/* <li className='list-none mr-2 border-2  border-primary rounded-lg shadow-md py-1 px-2 text-primary font-semibold hover:text-white hover:bg-primary'><Link to="/login">Connecter</Link> </li> */}
                {/* <h4 className=' bg-red-500 text-white shadow-lg' onClick={logout}>log out</h4> */}
            </ul> 
            </div>
            
        </div>
  )
}

export default TopHeader