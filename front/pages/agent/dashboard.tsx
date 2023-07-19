import Image from 'next/image'
import useRouter from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard(){
    let dataCount = {
        count_naiss:0,
        count_deces:0,
        count_mariage:0
    }
    
    const [data, setData] = useState(dataCount)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/dashboard')
        .then((res)=>setData(res.data))
        .catch((err)=>console.error(err))
    },[])
    return<>
    <main>
        <div>
            <div>
                <h2>Demandes a traiter</h2>
                <p>Visionner et traiter les differentes demandes</p>
            </div>
            <div>
                <div>
                    <Image />
                    <p>{data.count_naiss}</p> 
                    <p>Naissance</p>
                    <Image />
                </div>
                
                <div>
                    <Image />
                    <p>{data.count_deces}</p>                    
                    <p>Deces</p>
                    <Image />
                </div>
                
                <div>
                    <Image />
                    <p>{data.count_mariage}</p>                    
                    <p>Mariage</p>
                    <Image />
                </div>
            </div>
        </div>

        <div>
            <div>
                <h2>Declarations</h2>
                <p>Effectuer uen Declaration</p>
            </div>

            <div>
                <div>
                    <Image/>
                    <p>Naissance</p>
                </div>

                <div>
                    <Image/>
                    <p>Deces</p>
                </div>

                <div>
                    <Image/>
                    <p>Mariage</p>
                </div>
            </div>
        </div>
    </main>
    </>
}