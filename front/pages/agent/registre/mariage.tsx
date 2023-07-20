import {useRouter} from 'next/router'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

export default function Naissance({data}:{data:StructData[]}){
    const router = useRouter()
    
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

type StructData={
        id:'',
        numeroDoc: 0,
        nom: '',
        prenom: ''
    }

export const getServerSideProps: GetServerSideProps = async() =>{    
    const res = await fetch('http://localhost:8000/api/liste-mariage')
    const data : StructData[] = await res.json()
        return{props:{data}}
}