import {useRouter} from 'next/router'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import styles from '../../../styles/agents/data.module.css' 
import Header from '../../../components/header'

export default function Naissance({data}:{data:StructData[]}){
    return<>
        <Header/>
        <main className={styles.main}>
            <div>
                <h1>Demandes de naissance</h1>
                <p style={{"marginBottom":"3%", "marginTop":"2%", "fontSize":"17px"}}>Traiter les differentes demandes</p>
               </div>

            <div>
                <ul>
            {data.map((item)=>(
                    <li key={item.id}>
                        <div className={styles.liste}>
                            <div>
                                <Image src="/bibe.png" width={40} height={40} />
                                <p style={{"borderRight":"1px solid", "width":"3%"}}>{item.numeroDoc}</p>
                                <p>{item.prenom} {item.nom}</p>    
                            </div>
                            <Image src="/go.png" width={25} height={25}/>
                        </div>
                    </li>
            ))}
                
                </ul>
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
 
export const getServerSideProps: GetServerSideProps = async() => {
    const res = await fetch('http://localhost:8000/api/liste-demande-naissance')
    const data:StructData[]= await res.json()
    return{props:{data}}
}