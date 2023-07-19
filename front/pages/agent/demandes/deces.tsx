import axios from 'axios'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'

export default function Deces(){
    const structData={
        id:'',
        numeroDoc: 0,
        nom: '',
        prenom: ''
    }
    const [data, setData] = useState([structData])
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/liste-demande-deces')
        .then((res)=>setData(res.data))
        .catch((err)=>console.error(err))
    },[])

    return<>
        <main>
            <div>
                <h2>Demandes de deces</h2>
                <p>Traiter les differentes demandes</p>
               </div>

            <div>
            {data.map((item)=>(
                <ul key={item.id}>
                    <li >
                        <div>
                            <Image/>
                            <p>{item.numeroDoc}</p>
                            <p>{item.prenom} {item.nom}</p>
                            <Image/>
                        </div>
                    </li>
                </ul>
            ))}
                
            </div>
        </main>
    </>
}