import React,{useContext} from 'react'
import { UserContext } from '../../../../Context/UserContext';


function CarnavalTable(props) {
    const {user}=useContext(UserContext)
    const DATA_HEADER=['localisation','Date Debut','Date Fin','Ville'];
     const data=props.data;
        
    //header
    const STYLE_THEAD="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";
    
    
    
    const DateHeader=DATA_HEADER.map((head,idx)=>{
        return( 
            
            <th key={idx} scope="col" className="px-6 py-3">
                        {head}
            </th>
            
            )
    })
    
  
    const ROW_TR_STYLE="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
    const ROW_TH_STYLE="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap";
    const dataRow=data.map((row)=>{
        return(
            <tr key={row.IdCarnaval} className={ROW_TR_STYLE}>
                <th scope='row' className={ROW_TH_STYLE}>
                    {row.location.toUpperCase()}
                </th>
                <td className="px-6 py-4">
                    {row.dateDebut}
                </td>
                <td className="px-6 py-4">
                    {row.dateFin}
                </td>
                <td className="px-6 py-4">
                    {row.nomVille}
                </td>
                {user.role==4 && <td className="px-6 py-4 text-right">
                    <button onClick={()=>{props.handleEdit(row.IdCarnaval,row.location,row.dateDebut,row.dateFin,row.Ville)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</button>
                </td> } 
            </tr>
        )
    })

    
    

    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {dataRow.length>0 &&
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className={STYLE_THEAD}>
            <tr>
                {DateHeader}
            </tr>
            
        </thead>
        <tbody>
            
            {dataRow}
           
        </tbody>
    </table>
    }
    {dataRow.length==0 && <div className='bg-gray-200 w-11/12 text-center'>
        <h2>no data to display...</h2>
    </div>}
    

    </div>
  )
}

export default CarnavalTable