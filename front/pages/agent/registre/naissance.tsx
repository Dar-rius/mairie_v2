import axios from 'axios'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'

export default function Naissance(){
    const structData={
        id:'',
        numeroDoc: 0,
        nom: '',
        prenom: ''
    }
    const [data, setData] = useState([structData])
    const router = useRouter()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/liste-naissance')
        .then((res)=>setData(res.data))
        .catch((err)=>console.error(err))
    },[])

    return<>
        <main>
            <div>
                <h2>Declarations de naissance</h2>
                <p>Visionner les differentes declarations</p>
               </div>

            <div>
            {data.map((item)=>(
                <ul key={item.id}>
                    <li >
                        <div onClick={()=>router}>
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